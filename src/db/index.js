const pg = require('pg');

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || '',
  SSL: { rejectUnauthorized: false },
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
