const { text } = require('express');
const { pool, Pool, Query } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = {
    Query: (text, params) => pool.query(text, params),
};