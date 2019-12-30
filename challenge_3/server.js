const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const CheckoutModel = require('./db/db');

var app = express();
const port = 6966;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/', async (req,res) => {
    console.log(req.body.name)
    //console.log(JSON.parse(req.body))
    try {
        const newForm = await CheckoutModel.create(req.body);
        console.log(newForm);
        res.status(201).end();
    } catch (e) {
        console.log(e)
        res.status(400).end()
    }
});





app.listen(port, () => console.log(`server is running on port  ${port}`));
