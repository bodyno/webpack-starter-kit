const webpack = require('webpack');

module.exports = {
    entry: './src/entry.js',
    output:{
        path:'./src',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style!css'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}