/* eslint no-var: 0, vars-on-top: 0 */
require('babel-register');
const config = require('../../.webpack/webpack.config');
const libConfig = require('../../.webpack/webpack.lib.config');
module.exports = [config, libConfig];