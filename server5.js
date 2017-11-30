const http=require("http");
const fs=require("fs");
let server=http.createServer(function(req,res){
          fs.readFile(`data${req.url}`,function(err,date){
                    console.log(`data${req.url}`);
                   if(err){

                     console.log("读取错误"+err);
                   }else{
                      res.write(date);
                   }
                  res.end();
          });
});
server.listen(8080);
