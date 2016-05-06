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

	requirejs: '../../node_modules/requirejs/require',

	// All files that should be checked with JSHint
	jsHintFiles: [
		'Gruntfile.js',
		'src/js/**/*.js',
		'!src/js/libs/**/*.js'
	],

	// JavaScript files
	js: {
		files: [
			'src/js/**/*.js'
		],
		config: 'src/js/config.js',
		dest: 'dist/' + timestamp  + '/main.min.js'
	},

	// Sass files
	sass: {
		files: [
			'src/scss/**/*.scss'
		],
		src: 'src/scss/main.scss',
		devDest: 'src/css/main.css',
		dest: 'dist/' + timestamp  + '/main.min.css'
	},

	// Images
	img: {
		src: 'src/img/',
		dest: 'dist/img/'
	},

	// Versioned references
	replace: {
		build: {
			src: 'temp/**.html',
			dest: 'dist/',
			maincss: '' + timestamp  + '/main.min.css',
			mainjs: '<script async defer src="' + timestamp  + '/main.min.js"></script>'
		},

		dev: {
			src: 'temp/**.html',
			dest: 'src/',
			maincss: 'css/main.css',
			mainjs: '<script data-main="js/config" src="../node_modules/requirejs/require.js"></script>'
		}
	},

	concat: {
		htmlindex: {
			src: [
				'src/templates/header.html',
				'src/templates/index.html',
				'src/templates/footer.html'
			],
			dest: 'temp/index.html'
		},
		jsinit: {
			src: [
				'src/js/libs/modernizr-custom.js',
				'node_modules/fontfaceobserver/fontfaceobserver.js',
				'src/js/misc/fontfaceobserver.config.js'
			],
			dest: 'src/init.js'
		}
	}
};
