const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// 'use' means the use of middleware
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/exp', (req, res) => {
  res.send('EXP');
});

app.get('/exp/:name/:age', (req, res) => {
  // req.params
  // req.query
  res.send(`${req.params.name} : ${req.params.age}`);
});

app.post('/', (req, res) => {
  console.log(req.body);
  // db works here
  res.send('Successfully POST data');
});

app.listen(3000);
