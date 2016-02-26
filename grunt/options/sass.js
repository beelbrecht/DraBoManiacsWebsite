/**
 * Sass
 */
'use strict';

var config = require('../config');

/*
 * Helper
 */
var helper = {};

helper.sassDev = {};
helper.sassDev[config.sass.devDest] = config.sass.src;

helper.sassProd = {};
helper.sassProd[config.sass.dest] = config.sass.src;

module.exports = {

	// For development
	dev: {
		options: {
			unixNewlines: true,
			outputStyle: 'expanded'
		},

		files: helper.sassDev
	},

	// For production
	build: {
		options: {
			outputStyle: 'compressed'
		},

		files: helper.sassProd
	}
};
