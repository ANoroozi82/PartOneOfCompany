module.exports = {
    '/dataService' : {
        'GET' : () => {
            console.log("GET");
        },
        'POST' : () => {
            console.log("POST");
        },
        default : () => {
            console.log("DEFAULT");
        }
    },
    default : () => {
        console.log("DEFAULT");
    }
}