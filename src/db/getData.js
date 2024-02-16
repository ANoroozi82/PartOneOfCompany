const redis = require("redis");
const exist = require("./exist");
const client = redis.createClient();

async function Get(tableSelect, key) {
    try {
        await client.connect();
        await client.select(tableSelect);
        const res = await exist.Exist(tableSelect, key).then(async r => {
            if (r === 0) {
                return "Not Exists";
            } else {
                const res = await client.HGETALL(key);
                await client.disconnect();
                return res;
            }
        });
        return res;
    } catch (e) {
        return "e";
    }
}

exports.Get = Get;