/**
 * Bootstrap Module
 */

require([
	'jquery',
	'modules/initGoogleMap',
	'collapse',
	'carousel'
], function ($) {
	'use strict';

	// Menüscrolling
	$('#mainNavbar ul li a').click(function(event) {
		// Scroll Offset für fixierte Navbar
		var offset = 90;
		event.preventDefault();
		$($(this).attr('href'))[0].scrollIntoView();
		scrollBy(0, -offset);
	});

	// Menü Collapse Events
	$('#mainNavbar').on('show.bs.collapse', function () {
		$('#mainNavbarToggle').addClass("is-active");
	});
	$('#mainNavbar').on('hide.bs.collapse', function () {
		$('#mainNavbarToggle').removeClass("is-active");
	});

	// Fallback, falls objectfit nicht zur Verfügung steht.
	if ( ! window.Modernizr.objectfit ) {
		$('.teaser__image-container').each(function () {
			var $container = $(this),
			imgUrl = $container.find('img').prop('src');
			if (imgUrl) {
				$container
				.css('backgroundImage', 'url(' + imgUrl + ')')
				.addClass('compat-object-fit');
			}
		});
	}

});
