var express = require('express');
var app = express();
app.use(express.logger());

//my new code
var fs=require("fs");
var fname="index.html";
//

app.get('/', function(request, response) {
  response.send(fs.readFile(fname,'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
