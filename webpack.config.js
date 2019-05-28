module.exports = {
    //define entry point for webpack to start transforming
    entry: `${__dirname}/app/index.js`,
    module: {
        //transformations to perform before reaching browser
        loaders: [{
            //transformations performed on all js files
            test: /\.js$/,
            //ignore node_modules
            exclude: /node_modules/,
            //run babel loader on all js files
            loader: 'babel-loader'
        }]
    } 
};    