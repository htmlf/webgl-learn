/* MODIFY - modify the html document structure */
/* @wolfram77 / @subhajit */

(function(g, $h) {

	var $ = $h;
	var p = $.prototype;

	// add elements
	p.add = function(dir, val) {
		var par = dir.indexOf('Child')>=0;
		for(var i=this.set.length; i--;) {
			(par? this.set[i].parentElement : this.set[i]).insertBefore(val.cloneNode(true), this._modifyRef(this.set[i], dir));
		}
		return this;
	};

	// private: get reference element
	p._modifyRef = function(elem, dir) {
		switch(dir) {
			case 'next': return elem.nextElementSibling;
			case 'prev': return elem;
			case 'firstChild': return elem.firstElementChild;
		}
		return null;
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.html=g.html||{}).modify = $;
	console.log('html.modify> ready!');
})($$, $$.html.base);
