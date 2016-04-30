/**
 * Copy files
 */
'use strict';

var config = require('../config');

module.exports = {
	main: {
		files: [
			{
				expand: true,
				cwd: 'src/',
				src: ['*', '.*', '!*.html'],
				dest: 'dist/',
				filter: 'isFile',
				options: {
					mode: true
				}
			}
		]
	}
};
