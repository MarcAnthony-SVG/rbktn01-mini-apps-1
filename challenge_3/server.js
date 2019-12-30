const express = require('express');

var app = express();
const port = 6966;

app.use(express.static('public'));







app.listen(port, () => console.log(`server is running on port  ${port}`));
