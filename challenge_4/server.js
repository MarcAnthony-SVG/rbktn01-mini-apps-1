const express = require('express');
const port = 6969;
const app = express();


app.use(express.static('public'));



app.listen(port, () => console.log(`Server is running on port ${port}.`));

