/* SELECT - select elements from given set of elements */
/* @wolfram77 / @subhajit */

(function(g, $h) {

	var $ = $h;
	var p = $.prototype;

	// filter elements
	p.filter = function(flt, sgn, dst) {
		var f = typeof flt!=='string'? $._baseElements(flt) : flt, d = dst? dst.set : [], s = sgn? true : false;
		if(typeof flt!=='string') { for(var i=0; i<this.set.length; i++) if(s^(f.indexOf(this.set[i])<0)) d.push(this.set[i]); }
		else for(var i=0; i<this.set.length; i++) { if(s^this.set[i].matches(flt)) d.push(this.set[i]); }
		if(!dst) this.set = d;
		return dst? dst : this;
	};

	// traverse elements (slice like traversal)
	p.traverse = function(type, begin, end) {
		for(var i=0, tp=$._selectDir[type], dst=[]; i<this.set.length; i++) $e.traverse(dst, this.set[i], tp, begin||0, end||1);
		this.set = dst;
		return this;
	}

	// find by selector
	p.find = function(sel) {
		for(var i=0, dst=[]; i<this.set.length; i++) $a.filter(dst, false, dst, this.set[i].querySelectorAll(sel));
		this.set = dst;
		return this;
	};

	// private: traverse property short names
	$._selectDir = {
		'parent': 'parentElement',
		'children': 'children',
		'next': 'nextElementSibling',
		'prev': 'previousElementSibling',
		'firstChild': 'firstElementChild',
		'lastChild': 'lastElementChild'
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.html=g.html||{}).select = $;
	console.log('html.select ready!');
})($$, $$.html.base);
