/* BASE - defines a set of html elements */
/* @wolfram77 / @subhajit */

(function(g) {

	var $ = function(v) {
		v = v||{};
		this.set = v.set||[];
	};
	var p = $.prototype;

	// get elements
	p.get = function() {
		return this.set;
	};

	// slice elements
	p.slice = function(begin, end) {
		this.set = this.set.slice(begin, end);
		return this;
	};

	// private: get elements from object, element array, nodelist or element
	$._baseElements = function(val) {
		return val.set? val.set : (typeof val.length!=='undefined'? Array.prototype.slice.call(val) : [val]);
	};

	// ready
	if(typeof module!=='undefined') module.exports = c;
	(g.html=g.html||{}).base = c;
	console.log('html.base ready!');
})($$);
