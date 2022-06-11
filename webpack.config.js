const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const RunChromeExtension = require('webpack-run-chrome-extension')
/*
 contentScript: ['my-first-content-script', 'my-second-content-script', ],
background: 'background',
    extensionPage: ['popup', 'options', ],
 */
module.exports = {
    watch: true,


        plugins: [


            new CopyPlugin({
                patterns: [
                    { from: "public"},
                ],
            }),
            new RunChromeExtension({
                   extensionPath: path.resolve(__dirname, 'dist'),
                startingUrl: 'https://www.google.com',
                autoReload: true,
 })
        ],

    entry: {
        background: './src/background/index.js',
        popup: './src/popup/index.js',
        options: './src/options/index.js',
        changeColor: './src/contentscripts/usecases/changeColor.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool:'cheap-module-source-map'
};





/*
aa
aa

ssss
ssss
aa
 */
