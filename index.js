const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    user:"academy",
    password: process.env.password,
    host: "linux",
    port:5432,
    database: "omdb"
})

client.connect().then(()=> console.log("Connected Successfully")) //promise that gets fulfilled when client is connected
.catch(e => console.error) // shows error if promise is rejected
.finally(()=> client.end)  //ends the connection 