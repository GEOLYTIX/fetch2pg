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
      id
    FROM clarion.haringey_comments
    LIMIT 100 OFFSET ${offset}`)

  // Iterate through the returned rows
  for (row of rows) {

    const response = await fetch(`https://haringeystreetspaces.commonplace.is/comments.json/${row.id}`)
    const json = await response.json()

    // Log error and continue if status is not ok(200).
    if (response.status !== 200) {
      continue
    }
        
    try {

      const fields = {
        'describeTheLocationYouHaveMarkedOnTheMap': val => `location = '${val.replace(/\'/g, "\'\'")}'`,
        'wouldYouSupportTheseChangesBeingMadePermanent': val => `support = '${val}'`,
        'anyOtherCommentsAboutThisLocation': val => `comments = '${val.replace(/\'/g, "\'\'")}'`,
        'whatIssueSHaveYouIdentifiedAtThisLocation': val => val.length >= 1 && `issues = ARRAY[${val.map(val => `'${val.replace(/\'/g, "\'\'")}'`).join(',')}]` || '',
        'whatMeasureSCouldHelpPromoteSafeSocialDistancingHere': val => val.length >= 1 && `measures = ARRAY[${val.map(val => `'${val.replace(/\'/g, "\'\'")}'`).join(',')}]` || ''
      }

      const Q = `UPDATE clarion.haringey_comments SET
        date = '${json.date}',
        agree_agreed = ${json.agree.agreed},
        agree_number = ${json.agree.number},
        agree_mycomment = ${json.agree.myComment},
        agree_consents = ${json.agree.consents},

        ${json.fields.map(field => fields[field.name](field.value)).filter(val => val !== '').join(',')}

        WHERE id = '${row.id}';`

      console.log(Q)

      await target_pool.query(Q)

    } catch (error) {
        
      return console.error(error)
    }

  }

  if (rows.length < 100) return console.log('dun')

  offset += 100

  fetch2pg(offset)

})(offset)