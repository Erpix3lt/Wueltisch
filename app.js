const PORT = process.env.PORT || 5000

var express = require('express'),
app = express(); 
app.use('/', express.static(__dirname + '/'));
app.listen(PORT);

