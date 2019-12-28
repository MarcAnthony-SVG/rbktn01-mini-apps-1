const express = require('express');
const app = express();
const port = 6996;

app.use(express.static('client'));
//app.use(bodyParser.urlencoded());
app.use(express.urlencoded());

app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(port, () => console.log(`Server is up and running on port ${port} `));
