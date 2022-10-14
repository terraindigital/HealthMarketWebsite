const path = require("path");
const fs = require("fs")
const webpack = require('webpack');
const requireFromString = require('require-from-string');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const stylesFromHTML = require("styles-from-html")

const constructOutputPath = (pathname, endpoint) => {
    return path.join(__dirname, "../public/__healthmarkets/", endpoint)
}

const clientCfg = (pathname, endpoint, envs = {}) => ({
    mode: "production",
    entry: { index: pathname },
    output: {
        path: constructOutputPath(pathname, endpoint),
        filename: "[name].js",
        libraryTarget: "umd",
        globalObject: "this",
        publicPath: '',
    },
    resolve: {
        mainFiles: ['index.js', 'index.ts', 'index.tsx', 'index.jsx'],
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
        alias: {
            process: "process/browser"
        },
    },
    plugins: [
        new webpack.DefinePlugin(envs),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: './utils/template.html'
        }),
        new HTMLInlineCSSWebpackPlugin({
            replace: {
                removeTarget: false,
                target: '<style></style>',
            }
        }),
    ],
    optimization: {
        minimize: false
    },
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
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
            /*{
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',
            },*/
        ],
    },
})

const serverCfg = (pathname, endpoint, envs = {}) => ({
    mode: "production",
    target: 'node',
    externals: [nodeExternals()],
    entry: { index: pathname },
    output: {
        path: constructOutputPath(pathname, endpoint),
        filename: "server.js",
        libraryTarget: "commonjs2",
        publicPath: '',
    },
    resolve: {
        mainFiles: ['index.js', 'index.ts', 'index.tsx', 'index.jsx'],
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin(envs),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    optimization: {
        minimize: false
    },
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
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
            /*{
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',
            },*/
        ],
    },
})

const bundleAndRender = async ({ clientPathname, serverPathname, endpoint, envVars }) => {
    const headerInput = path.join(__dirname, clientPathname);
    const headerServerInput = path.join(__dirname, serverPathname);

    const headerPromise = await new Promise((resolve, reject) => {
        webpack(
            clientCfg(
                headerInput,
                endpoint,
                envVars,
            ), (err, stats) => { // [Stats Object](#stats-object)
                if (err) {
                    //reject(err)
                    console.error(err)
                } else if (stats.hasErrors()) {
                    const info = stats.toJson();
                    console.error(info.errors)
                }
                resolve(true)
            });
    })

    const headerServerPromise = await new Promise((resolve, reject) => {
        webpack(
            serverCfg(
                headerServerInput,
                endpoint,
                envVars,
            ), (err, stats) => { // [Stats Object](#stats-object)
                if (err) {
                    //reject(err)
                    console.error(err)
                } else if (stats.hasErrors()) {
                    const info = stats.toJson();
                    console.error(info.errors)
                }
                resolve(true)
            });
    })

    const outputPath = constructOutputPath(headerServerInput, endpoint)

    const contents = fs.readFileSync(`${outputPath}/server.js`, 'utf8');
    const app = requireFromString(contents);
    const prerenderedHTML = app()
    const webpackedHTMLStyle = stylesFromHTML(fs.readFileSync(`${outputPath}/index.html`, { encoding: "utf-8" })).css
    const renderedFinal = (`<style>${webpackedHTMLStyle}</style>` + prerenderedHTML + `<script type="text/javascript" src="/index.js"></script>`).trim();



    const orig = fs.readFileSync(`./utils/original.html`, { encoding: "utf-8" })

    const replaced = orig.replace("<!-- TEMPLATE HERE -->", renderedFinal)

    fs.writeFileSync(`${outputPath}/index.html`, replaced, { encoding: "utf-8" })

    return renderedFinal;
}

const compileForUsage = async () => {

    const fetch = await import("node-fetch")

    const headerDataRequest = await fetch.default('https://hmnm2022.wpengine.com/graphql', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
             query {
                menu(id: "2", idType: DATABASE_ID) {
                  menuItems(first: 200) {
                    nodes {
                      id
                      label
                      parentId
                      url
                      childItems {
                        nodes {
                          id
                          label
                          url
                        }
                      }
                    }
                  }
                }
             }
            `,
            variables: {}
        })
    })

    const headerDataJSON = await headerDataRequest.json()

    const headerData = await bundleAndRender({
        clientPathname: "./components/header.client.js",
        serverPathname: "./components/header.server.js",
        endpoint: "header",
        envVars: {
            "process.env.HEADER_DATA": JSON.stringify(headerDataJSON.data.menu),
            "process.env.GATSBY_SITE_BASE_URL": JSON.stringify("https://www.dev.healthmarkets.com")
        },
    })

    /*const footerData = await bundleAndRender({
        clientPathname: "./components/footer.client.js",
        serverPathname: "./components/footer.server.js",
        endpoint: "header",
        envVars: {
            "process.env.FOOTER_DATA": JSON.stringify({}),
            "process.env.GATSBY_SITE_BASE_URL": JSON.stringify("https://www.dev.healthmarkets.com")
        }
    })*/


}

compileForUsage()
