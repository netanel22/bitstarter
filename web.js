var express = require('express');
var app = express();
app.use(express.logger());

//my new code
var fs=require("fs");
var fname="index.html";
var str="*";

fs.readFile(fname,'utf8',function(err,data)
{
    if(err){
	str="error";
}
    else{
	str=data;
}
});
//

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
