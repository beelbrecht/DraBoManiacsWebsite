/**
 * Concatenate pages
 */
'use strict';

var xtend = require('xtend');
var config = require('../config');

module.exports = xtend(config.concat || {});
