/**
 * Module to initialize the Google Map
 */

define([ 'modules/googleMapsLoader' ], function(GoogleMapsLoader){
	'use strict';

	GoogleMapsLoader.done(function(GoogleMaps){

		// TVK Geokoordinaten
		var tvkLatLng = {lat: 51.394084, lng: 7.077798};
		// individueller Karten Stil
		var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
		var contentString = '<div id="content"><address><strong>DraBoManiacs</strong><br>Turnverein 1877 e.V.<br>Kampmannbrücke 1<br>45257 Essen</address><a href="https://goo.gl/maps/5zM8mrsvWkB2" target="_blank">In Google Maps öffnen</a></div>';

		var mapDiv = document.getElementById('googlemap');
		mapDiv.style.height = '80vh';

		var map = new GoogleMaps.Map(mapDiv, {
			center: tvkLatLng,
			zoom: 14,
			zoomControl: false,
			scrollwheel: false,
			disableDoubleClickZoom: true,
			styles: styles,
			draggable: false,
			mapTypeControl: false,
			streetViewControl: false
		});
		var marker = new GoogleMaps.Marker({
			position: tvkLatLng,
			map: map,
			title: 'Turnverein 1877 e.V.'
		});
		var infowindow = new GoogleMaps.InfoWindow({
			content: contentString
		});
		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});
		infowindow.open(map, marker);

		var mapCenter = map.getCenter();
		GoogleMaps.event.addDomListener(window, 'resize', function() {
			map.setCenter(mapCenter);
		});

	}).fail(function(){
		console.error("ERROR: Google maps library failed to load");
	});
});
