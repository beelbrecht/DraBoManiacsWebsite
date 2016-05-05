(function(){
	'use strict';
	// Font Face Observer. Asynchrones Laden von Webfonts überwachen.
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

		window.Promise
			.all([
				fontRoboto300.check(),
				fontRoboto400.check(),
				fontRoboto500.check()
			])
			.then(function(){
				window.document.documentElement.className += " fonts-loaded";
			});
	}
})();
