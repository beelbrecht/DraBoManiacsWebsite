/**
 * Require JS configuration
 */
'use strict';

var config = require('../config');

module.exports = {
	compile: {
		options: {
			mainConfigFile: config.js.config,
			include: [config.requirejs],
			out: config.js.dest,

			// Wrap in IIFE
			wrap: true,

			// Source Maps
			generateSourceMaps: false,

			// Do not preserve license comments when working with source maps, incompatible.
			preserveLicenseComments: false,

			optimize: 'uglify2'
		}
	}
};
