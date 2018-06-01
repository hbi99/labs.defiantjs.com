
/* jshint ignore:start */
@@include('jquery.js')
/* jshint ignore:start */

(function(window, document, $) {
	'use strict';

	var site = {
		init: function() {
			console.log(this);
		}
	};

	window.site = site;

	$(window).ready(site.init.bind(site));

})(window, document, jQuery);
