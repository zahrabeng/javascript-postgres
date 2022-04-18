const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    user:"academy",
    password: process.env.password,
    database: "omdb"
})

client.connect().then(()=> console.log("Connected Successfully")) //promise that gets fulfilled when client is connected
.then(()=> client.query("SELECT * FROM movies WHERE kind=$1 LIMIT 10 ", ["movie"]))
.then(results => console.log(results.rows))
.catch(e => console.log(e)) // shows error if promise is rejected
.finally(()=> client.end)  //ends the connection 