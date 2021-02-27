const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.listen(port, () => {
  console.log(`connected to ${port}`);
});