var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.bundle.js',
        publicPath: '/dist/',
    },
    devServer: { // Configuration for webpack-dev-server
        compress: true,
        port: 8080
    },
    mode: "development",
    devtool: "source-maps",
    module: {
        rules: [{
            
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader",
                options: {
                    sourceMap: true,
                }
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true,
                }
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                }
            }]
        }
    ]
    }
};