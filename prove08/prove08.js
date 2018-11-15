var http = require('http');

http.createServer(function (req, res) {
    if (req.url === '/home') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    }
    
    else if (req.url === '/getData') {
        res.writeHead(200, {"Content-Type": "application/json"});
        var jsonRes = {"name":"Brandon","class":"cs313"};
        res.write(JSON.stringify(jsonRes));
        res.end();
    }
    
    else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write('<h1>404: Page Not Found</h1>');
        res.end();
    }
    
}).listen(8888);