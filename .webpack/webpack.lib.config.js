import baseConfig, { options } from './base.config';
var fs = require('fs');
var path = require('path');

const getEntry = (folder, extension) => {
    var regExp = new RegExp(extension + '$');
    return fs.readdirSync(folder)
        .filter(file => regExp.test(file))
        .map(file => path.resolve(path.join(folder, file)))
        .reduce((memo, file) => {
            memo[path.basename(file, extension)] = file;
            return memo;
        }, {})
};

export default {
    ...baseConfig,

    entry: getEntry('./src/lib', '.js'),

    output: {
        path: './dist/lib',
        filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    externals: [ 'react', 'react-dom' ],
};