const http = require('http');
const fs = require('fs');

const port = 4000;
const hostname = 'localhost';
const home = fs.readFileSync('./index.html','utf-8');

const server = http.createServer((req, res) => {
  
  if(req.url === '/') {
    return res.end(home);
  }
  else if(req.url === '/about') {
    return res.end("<h1>This is the about page</h1>");
  }
  else if(req.url === '/contact') {
    return res.end("<h1>This is the contact page</h1>");
  }
  else{
    return res.end("<h1>404 page not found</h1>");
  }
})

server.listen(port, hostname,() =>{
    console.log(`Server is running on http://${hostname}:${port}`);
});