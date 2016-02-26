/**
 * RequireJS configuration
 */
require.config({

	deps: ['plugins/console', 'main'],

	paths: {
		'jquery': '../node_modules/jquery/dist/jquery',
	},

	shim: {

	},

	// Prevent caching issues, by adding an additional URL argument
	urlArgs: 'bust=' + (new Date()).getDate()

});
