import http from 'http';
import fs from 'fs';

http.createServer(function(req, res) 
{
if (req.url === "/")
res.end = "home.html"
})