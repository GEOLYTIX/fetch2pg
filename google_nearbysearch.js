const fetch = require('node-fetch')

const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.pg_connection,
  statement_timeout: 10000
});

query()

async function query(){

  const { rows } = await pool.query(`select fid, storename, st_x(st_transform(geom, 4326)) lng, st_y(st_transform(geom, 4326)) lat from dev.dominos`)

  for (row of rows) {

    //console.log(row);

    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${row.lat},${row.lng}&radius=15000&keyword=ambulance&key=${process.env.google_key}`)

    const json = await response.json()

    if (response.status !== 200) console.log(response)

    if (!json.results.length) {
      console.log(row);
      continue
    }

    console.log(`${row.storename} - ${json.results.length}`);
    
    for (result of json.results) {

      //console.log(result);

      await pool.query(`
      insert into dev.ambulance (id, place_id, name, dominos_fid, dominos_name, lat, lng)
      select
      '${result.id}',
      '${result.place_id}',
      '${result.name.replace(/\'/g, "")}',
      ${row.fid},
      '${row.storename.replace(/\'/g, "")}',
      ${result.geometry.location.lat},
      ${result.geometry.location.lng};`)

    }

  }

}