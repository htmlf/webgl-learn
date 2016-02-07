/* INDEX - defines a set of html elements */
/* @wolfram77 / @subhajit */

(function(g, $a, $o, $e) {

	var $ = function(v) {
		v = v||{};
		this.set = v.set||[];
	};
	var c = function(v, sel) {
		if(!v) v = document.documentElement;
		else if(typeof v==='string') { var ve = document.createElement('a'); ve.innerHTML = v; v = ve.children; }
		return new $({'set': $._elements(v)});
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

	// filter elements
	p.filter = function(flt, sgn, dst) {
		var f = typeof flt!=='string'? $._elements(flt) : flt, d = dst? dst.set : [], s = sgn? true : false;
		if(typeof flt!=='string') { for(var i=0; i<this.set.length; i++) if(s^(f.indexOf(this.set[i])<0)) d.push(this.set[i]); }
		else for(var i=0; i<this.set.length; i++) { if(s^this.set[i].matches(flt)) d.push(this.set[i]); }
		if(!dst) this.set = d;
		return dst? dst : this;
	};

	// traverse elements (slice like traversal)
	p.traverse = function(type, begin, end) {
		for(var i=0, tp=$._traverseProp[type], dst=[]; i<this.set.length; i++) $e.traverse(dst, this.set[i], tp, begin||0, end||1);
		this.set = dst;
		return this;
	}

	// find by selector
	p.find = function(sel) {
		for(var i=0, dst=[]; i<this.set.length; i++) $a.filter(dst, false, dst, this.set[i].querySelectorAll(sel));
		this.set = dst;
		return this;
	};

	// private: get elements from object, element array, nodelist or element
	$._elements = function(val) {
		return val.set? val.set : (typeof val.length!=='undefined'? Array.prototype.slice.call(val) : [val]);
	};

	// private: traverse property short names
	$._traverseProp = {
		'parent': 'parentElement',
		'children': 'children',
		'next': 'nextElementSibling',
		'prev': 'previousElementSibling',
		'firstChild': 'firstElementChild',
		'lastChild': 'lastElementChild'
	};

	// ready
	$o.mergeProt($, $$.html.attr);
	$o.mergeProt($, $$.html.event);
	$o.mergeProt($, $$.html.modify);
	$o.mergeProt($, $$.html.style);
	if(typeof module!=='undefined') module.exports = c;
	(g.html=g.html||{}).index = c;
	console.log('html.index ready!');
})($$, $$.type.array, $$.type.object, $$.type.element);
