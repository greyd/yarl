import webpack from 'webpack';
import yargs from 'yargs';
var ExtractTextPlugin = require("extract-text-webpack-plugin");

export const options = yargs
    .alias('p', 'optimize-minimize')
    .alias('d', 'debug')
    .option('port', {
        default: '8080',
        type: 'string'
    })
    .argv;

export const jsLoader = 'babel?cacheDirectory';
export const cssLoader = ExtractTextPlugin.extract('style-loader', 'css-loader?modules&camelCase=dashes&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]');//'style-loader!css-loader';

const baseConfig = {
    entry: undefined,

    output: undefined,

    externals: undefined,

    resolve: {
        extensions: ["", "..webpack-loader.js", ".web-loader.js", ".loader.js", ".js", '.css'],
    },

    module: {
        loaders: [
            { test: /\.js/, loader: jsLoader, exclude: /node_modules/ },
            { test: /\.css$/, loader: cssLoader, exclude: /node_modules/ }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(options.optimizeMinimize ? 'production' : 'development')
            }
        }),
        new ExtractTextPlugin("./style.css")
    ],

};

if (options.optimizeMinimize) {
    baseConfig.devtool = 'source-map';
}

export default baseConfig;