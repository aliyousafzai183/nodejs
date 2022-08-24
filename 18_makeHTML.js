const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname,"html");

// express function
app.use(express.static(filePath));
// static method loads static content

app.listen(50);