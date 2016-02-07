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
	$.krename = function(dst, src, fmt) {
		if(typeof fmt === 'string') for(var k in src)
			dst[fmt.replace(/%i/g, k)] = src[k];
		else for(var k in src)
			dst[fmt[k]] = src[k];
		return dst;
	};

	// merge properties only
	$.merge = function(dst, src) {
		for(var k in src)
			if(src.hasOwnProperty(k)) dst[k] = src[k];
		return dst;
	};

	// merge both properties and prototype
	$.mergeAll = function(dst, src) {
		for(var k in src)
			dst[k] = src[k];
		return dst;
	};

	// merge prototype only
	$.mergeProt = function(dst, src) {
		this.mergeAll(dst.prototype, src.prototype);
		return dst;
	};

	// inherit an function (as class)
	$.inherit = function(dst, src) {
		$.mergeProt(dst, src);
		dst.prototype.$super = src;
		return dst;
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).object = $;
	console.log('type.object> ready!');
})($$);
