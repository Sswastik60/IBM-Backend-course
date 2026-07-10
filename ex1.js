let http=require('http');
http.createServer(function(req,res){
    res.write('hello from the server');
    res.end();
}).listen(8080);