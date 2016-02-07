/* ASK - let me ask master, what he says */

(function() {
	var ajax = function(method, url, data, opt) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url, true, opt.user, opt.password);
		for(var k in opt.headers)
			xhr.setRequestHeader(k, opt.headers[k]);
		if(opt.mimeType) xhr.overrideMimeType(opt.mimeType);
		xhr.onload = function() {
			
			if(fn) fn(this.status===200? null : this, this.responseText);
		};
		xhr.send(data);
		return xhr;
	};

	var supportsHtml = function() {
		return 'import' in document.createElement('link');
	};

	var doImport = function() {
		var elems = document.getElementsByTagName('script');
		if(supportsHtml()) Array.push.apply(elems, document.getElementsByTagName('link'));
		for(var i=0, I=elems.length; i<I; i++) {
			var elem = elems[i];
			if(elem.rel!=='import') continue;
			ajax('GET', elem.href, null, function(err, data) {
				var div = document.createElement('div');
				div.attributes = elem.attributes;
				div.innerHTML = data;
				document.head.appendChild(div);
				elem.parentNode.removeChild(elem);
			});
		}
	};

	window.addEventListener('load', doImport, false);
})();
// embed <link rel="import"> tags in <head>
var embed = function() {
	// find link tags
	var links = document.getElementsByTagName('link');
	for(var i=0, I=links.length; i<I; i++) {
		// need rel="import" tags
		var link = links[i];
		if(link.rel !== 'import') continue;
		// load resource
		var xhr = new XMLHttpRequest();
		xhr.open('GET', link.href, true);
		xhr.onload = function() {
			// insert into <head>
			var div = document.createElement('div');
			div.attributes = link.attributes;
			div.innerHTML = this.responseText;
			document.head.appendChild(div);
		};
		xhr.send(null);
	}
};
