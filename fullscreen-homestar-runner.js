// ORIGINAL VERSION:
// Homestar-Fullon
// version 0.2
// 2005-04-26
// Copyright (c) 2005, T Rice, timgm@bcheck.net
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
// 
// REVAMPED/REVISITED VERSION:
// Fullscreen Homestar Runner
// version 1.1
// 2011-08-01
// Released under the GPLv3 license
// --------------------------------------------------------------------
//

(function() {
	function resize() {
		var objs=document.evaluate("//EMBED", document, null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

		var o = objs.snapshotItem(0);
		var bar = objs.snapshotItem(1);

		if(o && o.width && o.height && o.width > 0 && o.height > 0) {
			var dw = window.innerWidth;
			var dh = window.innerHeight - (bar && bar.height ? bar.height * 2 : 0);
			var ar = o.width/o.height;
      
			if(dw / ar <= dh) {
				dh = Math.floor(dw / ar);
			} else {
				dw = Math.floor(dh * ar);
			}
			
			/* set embed's size */
			o.width = dw;
			o.height = dh;
		}
	}

	/* remove margin */
	document.body.style.margin = "0px";

	/* resize embed when window is resized */
	window.addEventListener("resize", resize, false);

	/* resize on first load */
	resize();
})();
