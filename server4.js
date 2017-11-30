const fs=require("fs");
fs.writeFile("aa.txt","hahahhah",function(err){
if(err){
  console.log("写入数据失败");
}else{
  console.log("写入成功");
}

});
