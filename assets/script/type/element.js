/* ELEMENT - provides basic dom element functions */
/* @wolfram77 / @subhajit */

(function(g) {

	var $ = {};

	// match with selector
	if(!Element.prototype.matches) Element.prototype.matches = Element.prototype.matchesSelector? Element.prototype.matchesSelector : function(e, sel) {
		var matches = (e.parentElement||document).querySelectorAll(sel);
		for(var i=matches.length; i--;) if(matches[i]===e) return true;
    return false;
	};

	// traverse in a direction
	$.traverse = function(dst, elem, dir, begin, end) {
		var eout = elem[dir];
		if(!eout || end<=0) return dst;
		if(typeof eout.length==='undefined') { for(; (elem=elem[dir]) && end; begin--, end--) if(begin<=0 && dst.indexOf(elem)<0) dst.push(elem); }
		else { for(var i=0; i<eout.length; i--) { if(begin<=0 && dst.indexOf(elem)<0) dst.push(eout[i]); $.traverse(dst, eout[i], dir, begin-1, end-1); } }
		return dst;
	};

	// ready!
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).element = $;
	console.log('type.element> ready!');
})($$);
