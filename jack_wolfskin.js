const connect = require('@databases/pg');

const sql = require('@databases/sql');

const db = connect(process.env.pg_connection);

db.query(sql`

SELECT
    city_name,
    st_x(geom_p_4326) as lng,
    st_y(geom_p_4326) as lat
FROM dev.world_cities limit 10;

`)
.then(
  results => processResults(results),
  err => console.error(err)
);

function processResults(results) {

    results.forEach(async row => {
        const response = await require('node-fetch')(`https://www.jack-wolfskin.co.uk/on/demandware.store/Sites-JackWolfskin_UK-Site/en_GB/Store-FindStores?lat=${row.lat}&lng=${row.lng}`);
        const json = await response.json();

        if (!json.stores.length) return;

        json.stores.forEach(store => processStore(store));
    });
}



function processStore(store){
    console.log(`
        
    INSERT INTO dev.jack_wolfskin (id, city, store, lat, lng, geom)
    VALUES (
        ${parseInt(store.id)},
        '${store.city}',
        '${JSON.stringify(store)}',
        ${parseFloat(store.lat)},
        ${parseFloat(store.lng)},
        ${'ST_SetSRID(ST_Point(' + parseFloat(store.lng) + ',' + parseFloat(store.lat) + '),4326)'}
    )
    
    `);

    db.query(sql`
        
    INSERT INTO dev.jack_wolfskin (id, city, store, lat, lng, geom)
    VALUES (
        ${parseInt(store.id)},
        '${store.city}',
        '${JSON.stringify(store)}',
        ${parseFloat(store.lat)},
        ${parseFloat(store.lng)},
        ${'ST_SetSRID(ST_Point(' + parseFloat(store.lng) + ',' + parseFloat(store.lat) + '),4326)'}
    )
    
    `)
    .then(
        results => console.log(results),
        err => console.error(err)
    );
}



console.log('foo');