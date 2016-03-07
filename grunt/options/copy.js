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
				src: ['.htaccess'],
				dest: 'dist',
				filter: 'isFile'
			}
		]
	}
};
