const getData = require("../db/getData");

function getRequestHandler(id, res) {
    getData.Get(1, `${id}`).then(r1 => {
        if(r1 === "Not Exists") {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('شناسه پیدا نشد');
        } else if (r1 === "e") {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('خطای پایگاه داده');
        } else {
            getData.Get(2, `${id}`).then(r2 =>{
                const send = {
                    "id" : r1["id"],
                    "data" : JSON.parse(r1["data"]),
                    "parent" : r2["parent"]
                }
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(send));
            })
        }

    });
}

exports.handler = getRequestHandler;