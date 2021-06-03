let os = require('os');
let http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end();
        console.log('favicon requested');
        return;
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    console.log('i have been hit');
    res.end(JSON.stringify({
        message: req.connection.remoteAddress,
        net: os.networkInterfaces()
    }));

});

server.listen(3000);

console.log("Server running in 3000 port");