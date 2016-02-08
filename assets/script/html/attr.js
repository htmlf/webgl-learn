/* ATTR - manage attributes of html elements */
/* @wolfram77 / @subhajit */

(function(g, $h) {

	var $ = $h;
	var p = $.prototype;

	// get all, get, set or remove attribute
	p.attr = function(name, val) {
		if(typeof name==='undefined') return this.set[0].attributes;
		if(typeof val==='undefined') return this.set[0].getAttribute(name);
		if(val!==null) { for(var i=this.set.length; i--;) this.set[i].setAttribute(name, val); }
		else { for(var i=this.set.length; i--;) this.set[i].removeAttribute(name); }
		return this;
	};

	// get, set or remove id
	p.id = function(val) {
		return this.attr('id', val);
	};

	// get all, check, set or remove class
	p.class = function(name, val) {
		if(typeof name==='undefined') return this.set[0].classList;
		if(typeof val==='undefined') return this.set[0].classList.contains(name);
		if(val!==null) { for(var i=this.set.length; i--;) this.set[i].classList.add(name); }
		else { for(var i=this.set.length; i--;) this.set[i].classList.remove(name); }
		return this;
	};

	// get or set a property
	p.prop = function(name, val) {
		if(typeof val==='undefined') return this.set[0][name];
		for(var i=this.set.length; i--;) this.set[i][name] = val;
		return this;
	};

	// get or set html
	p.html = function(val) {
		return this.prop('innerHTML', val);
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.html=g.html||{}).attr = $;
	console.log('html.attr> ready!');
})($$, $$.html.base);
