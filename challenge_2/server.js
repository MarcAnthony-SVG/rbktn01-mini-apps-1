const express = require('express');
const app = express();
const port = 6996;

app.use(express.static('client'));


app.listen(port, () => console.log(`Server is up and running on port ${port} `));
