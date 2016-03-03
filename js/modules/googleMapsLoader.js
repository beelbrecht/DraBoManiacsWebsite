/**
 * Module to load the Google Map API
 */

var googleMapsLoadedDef = null;

define(['jquery'],function($) {
	'use strict';

	if(!googleMapsLoadedDef) {
		googleMapsLoadedDef = $.Deferred();

		window.googlemapsloaded = function() {
			googleMapsLoadedDef.resolve(google.maps);
		};

		require(['https://maps.googleapis.com/maps/api/js?key=AIzaSyA_i1vNSRfOs69bswtgRHl-Z06IrtrDsaA&callback=googlemapsloaded'],function(){},function() {
			googleMapsLoadedDef.reject();
			//console.log(err); // maybe freak out a little?
		});

	}
	return googleMapsLoadedDef.promise();
});
