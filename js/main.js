/**
 * Bootstrap Module
 */

require([
	'jquery',
	'fontfaceobserver',
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

	// if the class is already set, we're good.
	if( window.document.documentElement.className.indexOf( "fonts-loaded" ) < 0 ) {

		var fontRoboto300 = new window.FontFaceObserver( "Roboto", {
			weight: 300
		});
		var fontRoboto400 = new window.FontFaceObserver( "Roboto", {
			weight: 400
		});
		var fontRoboto500 = new window.FontFaceObserver( "Roboto", {
			weight: 500
		});
		var fontRoboto700 = new window.FontFaceObserver( "Roboto", {
			weight: 700
		});
		var fontRoboto300italic = new window.FontFaceObserver( "Roboto", {
			weight: 300,
			style: "italic"
		});
		var fontRoboto400italic = new window.FontFaceObserver( "Roboto", {
			weight: 400,
			style: "italic"
		});
		var fontRoboto500italic = new window.FontFaceObserver( "Roboto", {
			weight: 500,
			style: "italic"
		});
		var fontRoboto700italic = new window.FontFaceObserver( "Roboto", {
			weight: 700,
			style: "italic"
		});

		window.Promise
			.all([
				fontRoboto300.check(),
				fontRoboto400.check(),
				fontRoboto500.check(),
				fontRoboto700.check(),
				fontRoboto300italic.check(),
				fontRoboto400italic.check(),
				fontRoboto500italic.check(),
				fontRoboto700italic.check()
			])
			.then(function(){
				window.document.documentElement.className += " fonts-loaded";
			});
	}

});
