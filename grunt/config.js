/**
 * Grunt configuration
 */
'use strict';

var pkg = require('../package');

var timestamp = new Date().getTime();

module.exports = {

	// A banner for distributed files (name, version, license, date)
	banner: '/*! ' + pkg.name + ' - v' + pkg.version + ' - MIT License - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */',

	destDir: 'dist/',

	requirejs: '../node_modules/requirejs/require',
	//requirejs: '../node_modules/almond/almond',

	// All files that should be checked with JSHint
	jsHintFiles: [
		'Gruntfile.js',
		'js/**/*.js',
		'test/*.js',
		'test/specs/**/*.js'
	],

	// JavaScript files
	js: {
		files: [
			'js/**/*.js'
		],
		config: 'js/config.js',
		dest: 'dist/' + timestamp + '/main.min.js'
	},

	// Sass files
	sass: {
		files: [
			'scss/**/*.scss'
		],
		src: 'scss/main.scss',
		devDest: 'css/main.css',
		dest: 'dist/' + timestamp + '/main.min.css'
	},

	// Images
	img: {
		src: 'img/',
		dest: 'dist/img/'
	},

	// Versioned references
	replace: {
		build: {
			src: 'temp/**.html',
			dest: 'dist/',
			maincss: timestamp + '/main.min.css',
			mainjs: '<script src="' + timestamp + '/main.min.js"></script>'
		},

		dev: {
			src: 'temp/**.html',
			dest: '.',
			maincss: 'css/main.css',
			mainjs: '<script data-main="js/config" src="node_modules/requirejs/require.js"></script>'
		}
	}
};
