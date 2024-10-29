const http = require('http');
const port = 4000;
const hostname = '127.0.0.1'

// const myServer = http.createServer((req,res) => {
//     res.writeHead(202, {'Content-Type':'text/plain'});
//     res.write("Hello");
//     res.end();
// });

const myServer = http.createServer((req,res) => {
    res.writeHead(202, {'Content-Type':'text/html'});
    res.write("<h1>Hello</h1>");
    res.write("<h2>Hello</h2>");
    res.write("<h3>Hello</h3>");
    res.end();
});

myServer.listen(port, hostname,() => {
    console.log(`Server is running successfully at http://${hostname}:${port}`);
})