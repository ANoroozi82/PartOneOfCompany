const http = require("http");
const url = require("url");
const port = 81;
const postRequestHandler = require("./modules/postRequestHandler");
const getRequestHandler = require("./modules/getRequestHandler");
const putRequestHandler = require("./modules/putRequestHandler");

function Start() {
    const server = http.createServer(handleRequest);

    function handleRequest(req, res) {
        let urlParse = url.parse(req.url);
        let rawData = "";

        req.on('data', (chunk) => {
            rawData += chunk;
        });

        if (urlParse.pathname === "/dataService") {
            if (req.method === "GET") {
                ///////////////////////////////////////////////////////////
                const id = urlParse.query.slice(3);
                getRequestHandler.handler(id, res);

            } else if (req.method === "POST") {
                ///////////////////////////////////////////////////////////
                req.on('end', () => {
                    postRequestHandler.handler(JSON.parse(rawData), res);
                });

            } else if (req.method === "PUT") {
                ///////////////////////////////////////////////////////////
                req.on('end', () => {
                    putRequestHandler.handler(JSON.parse(rawData), res);
                });

            } else {
                res.writeHead(405, {'Content-Type': 'text/plain'});
                res.end('Method Not Allowed');
            }
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
        }
    }

    server.listen(port);

    console.log(`🚀 Server run on http://127.0.0.1:${port}`);
}

exports.Start = Start;