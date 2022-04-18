const {Client} = require('pg')
require('dotenv').config();

const client = new Client({
    user:"academy",
    password: process.env.password,
    database: "omdb"
})


async function excecute(){

    try{

    await client.connect() // returns a promise
    console.log("Connected Successfully")
    const results = await client.query("SELECT * FROM movies LIMIT 5")
    console.log(results.rows)
    }

    catch(ex){
        console.log(`Something wrong happened ${ex}`)
    }
    finally {
        await client.end()
        console.log("Client Disconnected")
    }
}

excecute()