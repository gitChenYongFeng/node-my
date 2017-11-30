const fs=require("fs");
fs.readFile("1.txt",function(err,data){
     if(err){

        console.log("读取错误");
     }else{
        console.log("读取成功"+data);
     }

});
