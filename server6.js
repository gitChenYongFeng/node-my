const http=require("http");
const socket=require("socket.io");
const httpserver=http.createServer();
httpserver.listen(8080);


const ws=socket.listen(httpserver);
ws.on("connection",function(sok){
    sok.on("a",function(n1,n2,n3){
      console.log(n1,n2,n3);
    });
});
