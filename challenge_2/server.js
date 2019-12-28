const express = require('express');
const bodyParser = require('body-parser');
const helperFunctions = require('./utilties/helpers');
const formidable = require('formidable');

const Promise = require('bluebird');
const fs = require('fs');
const path = require('path');

const jsonToCSV = helperFunctions.JSONToCSV;

const app = express();
const port = 6969;

readFileAsync = Promise.promisify(fs.readFile);
writeFileAsync = Promise.promisify(fs.writeFile);


app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', (req, res) => {
    new formidable.IncomingForm().parse(req)
        .on('field', (name, field) => {
            var csv = jsonToCSV(JSON.parse(field));
            readFileAsync('./utilties/ids.txt')
                .then(counter => Promise.resolve(Number(counter)))
                .catch(() => {
                    return writeFileAsync('./utilties/ids.txt', 0).then(() => 0)
                })
                .then(id => {
                    return writeFileAsync(`${__dirname}/utilties/${id}.csv`, csv)
                        .then(() => Promise.resolve(id))
                })
                .catch(() => console.log('Error while writing the file'))
                .then((n = 0) => {
                    res.header('Content-Disposition', `attachment; filename=report${n}.csv`);
                    res.sendFile(path.join(__dirname, `/utilties/${n}.csv`));
                    return Promise.resolve(n);
                })
                .then(id => {
                    writeFileAsync(`./utilties/ids.txt`, id + 1);
                    return Promise.resolve(id + 1)
                })
                .catch(() => console.log('error occurred'))
        })
        .on('fileBegin', (name, file) => {
            file.path = __dirname + '/uploads' + file.name;
        })
        .on('file', (name, file) => {
            console.log('Uploaded file', name, file)
        })
        .on('aborted', () => {
            console.error('Request aborted by the user')
        })
        .on('error', (err) => {
            console.error('Error', err);
            throw err
        })
    // var csv = jsonToCSV(JSON.parse(req.body.cInput));
    // readFileAsync('./utilties/ids.txt')
    //     .then(counter => Promise.resolve(Number(counter)))
    //     .catch(() => {
    //         return writeFileAsync('./utilties/ids.txt', 0).then(() => 0)
    //     })
    //     .then(id => {
    //         return writeFileAsync(`${__dirname}/utilties/${id}.csv`, csv)
    //             .then(() => Promise.resolve(id))
    //     })
    //     .catch(() => console.log('Error while writing the file'))
    //     .then((n = 0) => {
    //         res.header('Content-Disposition', `attachment; filename=report${n}.csv`);
    //         res.sendFile(path.join(__dirname, `/utilties/${n}.csv`));
    //         return Promise.resolve(n);
    //     })
    //     .then(id => {
    //         writeFileAsync(`./utilties/ids.txt`, id + 1);
    //         return Promise.resolve(id + 1)
    //     })
    //     .then(lastId => {
    //         writeFileAsync(`./utilties/last.txt`, lastId );
    //         return Promise.resolve(lastId)
    //     })
    //     .catch(() => console.log('error occurred'))

});

app.listen(port, () => console.log(`Server is up and running on port ${port} `));
