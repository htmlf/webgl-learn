/* ARRAY - provides basic array functions */
/* @wolfram77 / @subhajit */

(function(g) {

	var $ = {};

	// fill with value
	if(!Array.prototype.fill) Array.prototype.fill = function(val, bgn, end) {
		for(var i=bgn||0, I=end||this.length; i<I; i++)
			this[i] = val;
		return this;
	};

	// create from iterable
	if(!Array.from) Array.from = function(lst, fn, ths) {
		var k, a = [];
		fn = fn || (function(v) { return v; });
		ths = ths || this;
		for(k in lst)
			a.push(fn.call(ths, k, lst[k]));
		return a;
	};

	// get last value
	$.last = function(src) {
		return src[src.length-1];
	};

	// slice an array-like
	$.slice = function(src, start, end) {
		return Array.prototype.slice.call(src, start, end);
	};

	// append an array-like
	$.append = function(dst, src) {
		Array.prototype.push.apply(dst, arr);
		return dst;
	};

	// filter data from source
	$.filter = function(flt, sgn, dst, src) {
		for(var i=0; i<src.length; i++) { if((flt.indexOf(src[i])<0)^sgn) dst.push(src[i]); }
		return dst;
	};

	// join in specified format
	$.joinFmt = function(src, fmt, sep) {
		for(var i=0, I=src.length, dst=''; i<I; i++)
			dst += fmt.replace(/%i/g, src[i]) + (i===I-1? '' : sep||',');
		return dst;
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).array = $;
	console.log('type.array> ready!');
})($$);
