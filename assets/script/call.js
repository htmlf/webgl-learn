/* DISCUSS - let me discuss with server, before we proceed */

(function() {

	var do = function(method, url, opt) {
		var req = new XMLHttpRequest();
		req.open(method, url, true, opt.user, opt.password);
		for(var k in opt.headers)
			req.setRequestHeader(k, opt.headers[k]);
		if(opt.mimeType) req.overrideMimeType(opt.mimeType);
		req.addEventListener('load', function() {
			if(fn) fn(this.status===200? null : this, this.responseText);
		});
		req.onload = function() {
			
		};
		req.send(data);
		return req;
	};
})();
