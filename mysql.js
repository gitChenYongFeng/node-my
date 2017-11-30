const mysql=require("mysql");
let db=mysql.createPool({host:"localhost",user:"root",password:"",database:"20171115"});
db.query("select * from user_name",function(err,data){

if(err){
   console.log("错误");
}else{

let ms=JSON.stringify(data);
console.log(ms);

}
});
