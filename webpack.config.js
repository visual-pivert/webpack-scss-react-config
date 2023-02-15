const path = require('path')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: './lib/main.js',
    output: {
        path: path.resolve(__dirname, 'assets/bundles'),
        filename: '[name].bundle.js',
        publicPath: '/assets/bundles'
    },
    plugins: [
        new MiniCssExtractPlugin(options = {
            filename: '[name].bundle.css'
        }),
        new CleanWebpackPlugin(),
    ],
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    },
}


const devConfig = {
    ...config,
    mode: 'development',
    devtool: 'cheap-module-source-map'
}

const prodConfig = {
    ...config,
    mode: 'production',
    devtool: false
}


module.exports = (env) => {
    if (env.production) {
        return prodConfig
    } else {
        return devConfig
    }
}