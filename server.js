import http from 'http';
import fs from 'fs';

http.createServer(function(req, res) 
{
if (req.url === "/")
fs.end = "home.html"
else if (req.url === "/about")
res.end = "This is a server." 
else ()
res.writeHead(404)
res.end = "Not found"
})