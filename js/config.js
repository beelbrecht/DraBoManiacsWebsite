/**
 * RequireJS configuration
 */
require.config({

	deps: ['main'],

	paths: {
		'jquery': '../node_modules/jquery/dist/jquery.slim',
		'collapse': '../node_modules/bootstrap/dist/js/umd/collapse',
		'carousel': '../node_modules/bootstrap/dist/js/umd/carousel',
		'util': '../node_modules/bootstrap/dist/js/umd/util',
		'fontfaceobserver': '../node_modules/fontfaceobserver/fontfaceobserver'
	},

	shim: {
		'util': {
			deps: ['jquery']
		}
	},

});
