module.exports = {
    devtool: 'eval',
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        preloaders: [{
            test: /\.json$/,
            loader: 'json'
        }],
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }, 
        { 
          test: /\.json$/, 
          loader: "json-loader" 
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
