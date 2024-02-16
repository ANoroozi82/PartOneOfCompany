const redis = require('redis');
const client = redis.createClient();

async function Exist(tableSelect ,keyToCheck) {
    await client.connect();
    await client.select(tableSelect);
    const res = await client.exists(keyToCheck);
    await client.disconnect();
    return res;
}

exports.Exist = Exist;