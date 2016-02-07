/* STYLE - manage style for html elements */
/* @wolfram77 / @subhajit */

(function(g, $s) {

	var $ = function(v) {
		v = v||{};
		this.set = v.set||[];
	};
	var p = $.prototype;

	// get or set width
	p.width = function(val) {
		if(typeof val==='undefined') return this.set[0].clientWidth;
		for(var i=this.set.length, v=this._toUnits(val); --i;) this.set[i].style.width = v;
		return this;
	};
	
	// get or set height
	p.height = function(val) {
		if(typeof val==='undefined') return this.set[0].clientHeight;
		var v = this._toUnits(val);
		for(var i=this.set.length; --i;) this.set[i].style.height = val+'px';
		return this;
	};
	
	// get or set position
	p.position = function(val) {
		if(typeof val==='undefined') return [this.set[0].clientLeft, this.set[0].clientTop];
		var v = [this._toUnits(val[0]), this._toUnits(val[1])];
		for(var i=this.set.length, style; --i; style=this.set[i].style) {
			style.position = 'absolute';
			style.left = v[0];
			style.top = v[1];
		}
		return this;
	};

	// get, set or remove style
	p.style = function(name, val) {
		if(typeof name==='undefined') return getComputedStyle(this.set[0], null);
		name = $s.camelCase(name);
		if(typeof val==='undefined') return getComputedStyle(this.set[0], null)[name];
		for(var i=this.set.length; i--;) this.set[i].style[name] = val;
		return this;
	};

	// convert number to pixels ()
	p._toUnits = function(v) {
		return typeof v==='string'? v : v+'px';
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.html=g.html||{}).style = $;
	console.log('html.style> ready!');
})($$, $$.type.string);
