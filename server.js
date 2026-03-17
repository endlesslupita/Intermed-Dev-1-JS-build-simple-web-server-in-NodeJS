import http from 'http';
import fs from 'fs';

const server = http.createServer(function(req, res) 
{
    if (req.url === "/") 
    {
        fs.readFile("home.html", (err, data) => 
        {if(err) 
            {
            console.error("Error reading file: ", err);
            return;
            }
        else
        {
            res.end(data);
        }
        }
        )
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
}).listen(process.env.PORT || 3000)

export default server;
