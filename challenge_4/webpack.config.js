const path = require('path');
module.exports = {
    entry: './client/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './public')
    }
};
