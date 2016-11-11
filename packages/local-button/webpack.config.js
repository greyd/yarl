/* eslint no-var: 0, vars-on-top: 0 */
require('babel-register');
var config = require('./webpack/webpack.config');
var libConfig = require('./webpack/webpack.lib.config');
module.exports = [config, libConfig];