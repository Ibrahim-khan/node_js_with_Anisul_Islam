const http = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req,res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    }
});

server.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
});