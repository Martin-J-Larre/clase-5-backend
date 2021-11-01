const http = require('http');

let server = http.createServer((req, res) => {
    respuesta.end('Mi primer servidor');
})
