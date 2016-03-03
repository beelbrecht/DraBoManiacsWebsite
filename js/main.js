/**
 * Bootstrap Module
 */

require([
	'jquery',
	'modules/initGoogleMap',
	'collapse'
], function ($) {
	'use strict';

	// Scroll Offset für fixierte Navbar
	var offset = 60;
	$('#mainNavbar ul li a').click(function(event) {
		event.preventDefault();
		$($(this).attr('href'))[0].scrollIntoView();
		scrollBy(0, -offset);
	});

});
