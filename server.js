var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/gifted-bat', function(request, response){
    response.send('you are a gifted bat!');
});

app.listen(process.env.PORT || 4000);