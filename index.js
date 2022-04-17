const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    user:"academy",
    password: process.env.password,
})

console.log(client.password)