import baseConfig, { options } from './base.config';

export default {
    ...baseConfig,

    entry: {
        'index': './src/index.js',
    },

    output: {
        path: './dist',
        filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
        library: 'LocalButton',
        libraryTarget: 'umd',
    },

    externals: [ 'react', 'react-dom' ],
};