$(document).ready(function() {
	testAttr();
});

/*

var gl = null;

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


var loadShader = function(type) {
	var shader = gl.createShader(type);

};


var onready = function() {
	embed();
	// prepare canvas
	var canvas = document.getElementById('canvas');
	canvas.width = canvas.parentElement.clientWidth;
	canvas.height = canvas.width * (6/16);
	// initialize webgl
	gl = canvas.getContext('webgl');
};

// when document loaded, run 'onready'
window.addEventListener('load', onready, false);
*/
