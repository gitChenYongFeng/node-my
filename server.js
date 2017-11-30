const http=require('http');
let server=http.createServer(function(request,response){
console.log("客服端发送请求"+request.url);
response.write("a我返回给您了");
response.end();
});
server.listen(8080);
