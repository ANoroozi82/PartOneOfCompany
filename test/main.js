const db = require('./db');
const http = require('http');
const url = require('url');
const response = require('./response');
const userSchema = require('./schema.json')
const Ajv = require("ajv");

async function run(req, res) {
    // const database = new db();
    // await database.create("amir", "noroozi");

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // const urlParse = url.parse(req.url).pathname;
    // try {
    //     response[urlParse][req.method]();
    // } catch (e) {
    //     response[urlParse].default();
    // }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // const ajv = new Ajv({ allErrors: true });
    // const validate = ajv.compile(userSchema);
    // let rawData = "";
    //
    // req.on('data', (chunk) => {
    //     rawData += chunk;
    // });
    // req.on('end', () => {
    //     const isValid = validate(JSON.parse(rawData));
    //     console.log(isValid);
    //     console.log(validate.errors)
    // })

}

const server = http.createServer(run);

server.listen(81);
console.log("Ruuuuuuuuuuuuuuuuuuuuuuuuuuuuun");