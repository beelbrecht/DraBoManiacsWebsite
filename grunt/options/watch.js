/**
 * Watching for changes
 */
'use strict';

var config = require('../config');

module.exports = {
	scss: {
		files: config.sass.files,
		tasks: 'sass:dev'
	},

	js: {
		files: config.jsHintFiles,
		tasks: 'jshint'
	},

	pages: {
		files: 'templates/**/*.html',
		tasks: 'pages:dev'
	}
};
