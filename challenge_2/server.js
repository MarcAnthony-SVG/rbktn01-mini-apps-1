const express = require('express');
const app = express();
const port = 6996;

app.get('/', (req, res) => {
    console.log('hello')
});
app.listen(port, () => console.log(`Server is up and running on port ${port} `));
