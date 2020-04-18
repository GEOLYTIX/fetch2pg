const fetch = require('node-fetch')

const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.pg_connection,
  statement_timeout: 10000
});

query()

async function query(){

  const { rows } = await pool.query(`select place_id from dev.pharmacies_unique;`)

  for (row of rows) {

    //console.log(row);

    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${row.place_id}&key=${process.env.google_key}`)

    if (response.status !== 200) {
      console.log(response)
      continue
    }

    const json = await response.json()

    console.log(row.place_id)

    await pool.query(`
    update dev.pharmacies_unique set
    phone = ${json.result.formatted_phone_number && "'" + json.result.formatted_phone_number.replace(/\'/g, "") + "'" || 'NULL'},
    address = ${json.result.formatted_address && "'" + json.result.formatted_address.replace(/\'/g, "") + "'" || 'NULL'},
    url = ${json.result.website && "'" + json.result.website.replace(/\'/g, "") + "'" || 'NULL'}
    where place_id = '${row.place_id}';`)

  }

}