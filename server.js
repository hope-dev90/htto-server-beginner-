var http = require("http");
var server= http.createServer(function(req,res){
if(req = "/"){
    res.end("welcome here on our server");
}
if(req = "/pages"){
    res.end("you are lucky you found me");
}
else{
    res.end("wrong api");
}

});
server.listen(4400);
console.log("application running on 4400");
