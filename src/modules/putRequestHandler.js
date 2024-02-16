const exist = require("../db/exist");
const setData = require("../db/setData");

function handler(data, res) {
    let keys = Object.keys(data);

    setData.Add("PUT",`${data.id}`,
        `${keys[0]}`, `${data[keys[0]]}`,
        `${keys[1]}`, JSON.stringify(data[keys[1]]),
        `${keys[2]}`, `${data[keys[2]]}`).then(r => {
        if (r === "Ok") {
            res.writeHead(201, {'Content-Type': 'text/plain'});
            res.end("داده ها دخیره شد");
        } else if (r === "Not Exist") {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("درخواست نامعتبر است");
        } else {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("خطا در ارتباط با پایگاه داده");
        }
    });
}

exports.handler = handler;