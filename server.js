"use strict";

var path = require('path'),
    express = require('express'),
    
    app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3001);

console.log('Server started: http://localhost:3001/');