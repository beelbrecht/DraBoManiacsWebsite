/**
 * RequireJS configuration
 */
require.config({

	deps: ['main'],

	paths: {
		'jquery': '../node_modules/jquery/dist/jquery',
		'collapse': '../node_modules/bootstrap/dist/js/umd/collapse',
		'util': '../node_modules/bootstrap/dist/js/umd/util'
	},

	shim: {
		'util': {
			deps: ['jquery']
		}
	},

});
