/* OBJECT - provides basic object functions */
/* @wolfram77 / @subhajit */

(function(g) {

	var $ = {};

	// define a multi-level object
	$.define = function(dst, pl) {
		for(var ps=pl.split('.'), o=dst, i=0, I=ps.length; i<I; i++, o=o[ps[i]])
			if(typeof o[ps[i]]==='undefined') o[ps[i]] = {};
		return o;
	};

	// rename keys of object
	$.renameKeys = function(dst, src, fmt) {
		if(typeof fmt === 'string') for(var k in src)
			dst[fmt.replace(/%i/g, k)] = src[k];
		else for(var k in src)
			dst[fmt[k]] = src[k];
		return dst;
	};

	// merge properties
	$.merge = function(dst, src, all) {
		for(var k in src)
			if(all || src.hasOwnProperty(k)) dst[k] = src[k];
		return dst;
	};

	// inherit properties of a class
	$.inherit = function(dst, src, init) {
		$.merge(dst.prototype, src.prototype, true);
		if(init) dst.prototype.$super = src;
		return dst;
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).object = $;
	console.log('type.object> ready!');
})($$);
