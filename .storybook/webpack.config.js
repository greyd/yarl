// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional .webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const jsLoader = 'babel?cacheDirectory';
const imgLoader = 'url?name=img/[name]-[hash].svg';
const cssLoader = 'style-loader!css-loader?modules&camelCase=dashes&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

module.exports = {
    plugins: [
        // your custom plugins
    ],
    resolve: {
        extensions: [ "", "..webpack-loader.js", ".web-loader.js", ".loader.js", ".js", '.css' ],
    },
    module: {
        loaders: [
            { test: /\.svg/, loader: imgLoader },
            { test: /\.js/, loader: jsLoader, exclude: /node_modules/ },
            { test: /\.css$/, loader: cssLoader }
        ]
    },
};
