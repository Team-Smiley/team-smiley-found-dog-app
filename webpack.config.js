const path = require('path');

const SRC = path.join(__dirname, '/client/src');
const DIST = path.join(__dirname, '/client/dist');

module.exports = {
    mode: 'production',
    //define entry point for webpack to start transforming
    entry: `${SRC}/index.jsx`,
    module: {
        //transformations to perform before reaching browser
        rules: [{
            //transformations performed on all jsx files
            test: /\.jsx$/,
            //ignore node_modules
            exclude: /node_modules/,
            //run babel loader on all js files
            loader: 'babel-loader'
        }]
    },
    output: {
        filename: 'bundle.js',
        path: DIST
    }
};    