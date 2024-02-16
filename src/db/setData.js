const redis = require('redis');
const client = redis.createClient();
const exist = require('../db/exist');
client.on('connect', function () {
    console.log('Connected!');
});

async function Add(method ,id, key1, value1, key2, value2, key3, value3) {
    try {
        await client.connect();
        const res = await exist.Exist(1, id).then(async r => {
            if (method === "POST") {
                if (r === 0) {
                    let res = 0;
                    await AddValues(1, id, key1, value1);
                    await AddValues(1, id, key2, value2);
                    await AddValues(2, id, key1, value1);
                    await AddValues(2, id, key3, value3);
                    await client.disconnect();
                    return "Ok";
                } else {
                    return "Exist";
                }
            } else {
                if(r === 1) {
                    let res = 0;
                    await AddValues(1, id, key1, value1);
                    await AddValues(1, id, key2, value2);
                    await AddValues(2, id, key1, value1);
                    await AddValues(2, id, key3, value3);
                    await client.disconnect();
                    return "Ok";
                } else {
                    return "Not Exist"
                }
            }
        });
        return res;
    } catch (e) {
        return e;
    }
}

async function AddValues(tableSelect, id, key, value) {
    await client.select(tableSelect);
    await client.HSET(id, key, value, (err, reply) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Record stored successfully:', reply);
        }

        client.quit();
    });
}

exports.Add = Add;