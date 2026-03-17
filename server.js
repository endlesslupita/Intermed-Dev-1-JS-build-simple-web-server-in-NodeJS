import http from 'http';
import fs from 'fs';

http.createServer(function(req, res) 
{
    if (req.url === "/") 
    {
        fs.readFile("home.html", (err, data) => 
        {if(err) 
            {
            console.err("Error reading file: ", err);
            return;
            }
        })
    }
    else if (req.url === "/about") 
    {
        res.end("This is a server.") 
    }

    else 
    {
        res.writeHead(404)
        res.end("Not found")
    };
})
