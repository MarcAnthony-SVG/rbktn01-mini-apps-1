var JSONtoCSV = (obj) => {
    var headerArr = Object.keys(obj).filter(e => e !== 'children');

    var result = [];
    var csv = headerArr + '\n';

    var csvGenerator = (csvReport) => {
        var str = '';
        for (var i = 0; i < headerArr.length; i++) {
            str += csvReport[headerArr[i]] + ',';
        }
        str = str.substr(0, str.length - 1) + '\n';
        return str;
    };

    var flattenObjects = (report) => {
        result.push(report);

        for (var i = 0; i < report.children.length; i++) {
            flattenObjects(report.children[i]);
        }
    };
    flattenObjects(obj);

    result.forEach(e => {
        csv += csvGenerator(e);

    });

    return csv;
};


exports.JSONToCSV = JSONtoCSV;

