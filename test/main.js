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
    const ans = parseCookies(req);

    res.setHeader('Set-Cookie', 'myCookie=Hiiiiiiii');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Cookie set successfully!');

}

function parseCookies(req) {
    const cookieHeader = req.headers.cookie;

    if (cookieHeader) {
        return cookieHeader
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((cookies, [key, value]) => {
                cookies[key.trim()] = decodeURIComponent(value);
                return cookies;
            }, {});
    }

    return {};
}

const server = http.createServer(run);

server.listen(81);
console.log("Ruuuuuuuuuuuuuuuuuuuuuuuuuuuuun");