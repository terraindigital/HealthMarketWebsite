const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const webpack = require("webpack");

module.exports = {
    mode: "production",
    entry: { index: "./wp-renderer/test-dev/index.js" },
    output: {
        path: path.resolve( __dirname, 'test' ),
        filename: 'main.js',
        publicPath: '/',
        libraryTarget: "umd",
        globalObject: "this",
    },
    resolve: {
        mainFiles: ['index.js', 'index.ts', 'index.tsx', 'index.jsx'],
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.HEADER_DATA": JSON.stringify({})
        }),
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'test-dev/index.html' ),
            filename: 'index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                //include:  path.resolve(path.join("../", __dirname)),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/react", "@babel/typescript"],
                        plugins: [
                            "@babel/proposal-object-rest-spread",
                            ["@babel/plugin-transform-runtime", { "regenerator": true }]
                        ]
                    }
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',
            },
        ],
    },
}
