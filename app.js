var express = require("express");
var bodyParser     =   require("body-parser"); 
var app = express(); 
app.use(bodyParser.urlencoded({ extended: false }));  
var hostName = '127.0.0.1';
var port = 8088;

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });
app.get("/get",function(req,res){
    console.log("请求url：",req.path)
    console.log("请求参数：",req.query)
    res.send(questions);
})
app.post("/post",function(req,res){
    console.log("请求参数：",req.body);
    var result = {code:200,msg:"post请求成功"};
    res.send(result);
});


app.listen(port,hostName,function(){

   console.log(`服务器运行在http://${hostName}:${port}`);

});

var questions=[
    {
    data:213,
    num:444,
    age:12
    },
    {
    data:456,
    num:678,
    age:13
    }];

// var server = app.listen(3000, function () {

//     var host = server.address().address;
    
//      var port = server.address().port;
// })