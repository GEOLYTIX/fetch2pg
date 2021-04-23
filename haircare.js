// requires https://www.npmjs.com/package/node-fetch to be installed
const fetch = require('node-fetch')

// requires https://www.npmjs.com/package/pg to be installed
const { Pool } = require('pg')

// The source pg pool connection for the input data.
const source_pool = new Pool({
  connectionString: process.env.pg_source,
  statement_timeout: 10000
});

// The target pg pool connection for the output data.
const target_pool = new Pool({
  connectionString: process.env.pg_target,
  statement_timeout: 10000
});

// This is the starting offset.
let offset = 0;

// This is an iife (immediately invoked function expression) for the fetch2pg function.
// Must be async to support await for fetch command.
(async function fetch2pg(offset){

    // Get 100 rows from the input dataset.
  const { rows } = await source_pool.query(`
    SELECT
      h3code,
      st_x(geom_p_4326) lng,
      st_y(geom_p_4326) lat,
      (ST_MinimumBoundingRadius(st_transform(geom_4326, 3857))).radius
    FROM lookup.uk_glx_google_sampling_grid_10000units
    LIMIT 10 OFFSET ${offset}`)

  // Iterate through the returned rows
  for (row of rows) {

    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${row.lat},${row.lng}&radius=${row.radius}&keyword=&type=${process.env.type}&key=${process.env.google_key}`)
    const json = await response.json()

    // Log error and continue if status is not ok(200).
    if (response.status !== 200) {
      console.log(response)
      continue
    }

    // Log row if it doesn't contain results.
    if (!json.results.length) {
      console.log(row);
      console.log('no results');
      continue
    }

    // Log the h3 cell code and the number of results returned from Google Places API.
    console.log(`${row.h3code} - ${json.results.length}`);
    
    // Iterate through the results.
    for (result of json.results) {

      //console.log(result);
      
      try {

        console.log(`
        INSERT INTO public.hair_care ("full_dump", "h3code", "place_id", "status", "price_level", "rating", "name", "types", "vicinity", "lat", "lng")
        SELECT
        '${JSON.stringify(result)}',
        '${row.h3code}',
        '${result.place_id}',
        '${result.business_status}',
        '${result.price_level}',
        '${result.rating}',
        '${result.name.replace(/\'/g, "")}',
        '${result.types.join(', ')}',
        '${result.vicinity.replace(/\'/g, "")}',
        ${result.geometry.location.lat},
        ${result.geometry.location.lng};`)

        // Store the result in target table.
        await target_pool.query(`
        INSERT INTO public.hair_care ("full_dump", "h3code", "place_id", "status", "price_level", "rating", "name", "types", "vicinity", "lat", "lng")
        SELECT
        '${JSON.stringify(result).replace(/\'/g, "")}',
        '${row.h3code}',
        '${result.place_id}',
        '${result.business_status}',
        '${result.price_level}',
        '${result.rating}',
        '${result.name.replace(/\'/g, "")}',
        '${result.types.join(', ')}',
        '${result.vicinity.replace(/\'/g, "")}',
        ${result.geometry.location.lat},
        ${result.geometry.location.lng};`)

      } catch (error) {
        
        return console.error(error)
      }

    }

  }

  if (rows.length < 100) return console.log('dun')

  offset += 100

  fetch2pg(offset)

})(offset)