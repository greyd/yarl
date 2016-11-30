import baseConfig, { options } from './base.config';

export default {
    ...baseConfig,

    entry: {
        'index': './src/index.js',
    },

    output: {
        path: './dist',
        filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    externals: [ 'react', 'react-dom' ],
};