const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 3000;



app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.listen(port, () => {
  console.log('connected from server');
});