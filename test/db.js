const redis =require('redis');
const client = redis.createClient();
client.on('error', (err) => {
    console.error('Redis Error:', err);
});


module.exports = class DB {
    constructor() {
        this.db = client;
        this.db.connect();
    }

    async create(key, value) {
        return new Promise((resolve, reject) => {
            this.db.set(key, value, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}