// Step 1: Import the http module
const http = require("http");
// Step 2: Create server
const server = http.createServer((req,res)=>{
    // Step 3: Handle incoming request
    res.writeHead(200,{'content-type':'text/html'});
    res.write(`<h1 style="color:red;text-align:center">Hello World!</h1>`);
    res.end();
//Step 4: Server listens on port 3000
}).listen(3000);


