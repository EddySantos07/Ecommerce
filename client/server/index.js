const express = require('express');
const path = require('path');
var compression = require('compression')
const app = express();
const port = 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, './../dist')));

app.listen(port, ()=> {
    console.log('listening on port ', port);
})