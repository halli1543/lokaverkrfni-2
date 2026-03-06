const express = require('express');
const path = require('path');

const startrekReouter = require('./src/routes/startrek.routes');
const { title } = require(process);

const app = express();
const PORT = 3000;

app.set('viwes', path,path.join(__dirname, 'src/'views));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', startrekReouter);