const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'client/dist');
const APP_DIR = path.resolve(__dirname, 'client/src');
const config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: path.resolve(__dirname, 'client/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(jsx|js)$/,
              include: APP_DIR,
              exclude: /node_modules/,
              use: [{
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', {
                      "targets": "defaults"
                    }],
                    '@babel/preset-react'
                  ]
                }
              }]
            },
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                            outputPath: '../images/',
                            publicPath: 'images/',
                            useRelativePaths: true
                        }
                    }
                ]
            },
            {
                test: /\.(mp3|wav)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }

            },
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js"]
    }
};

module.exports = config