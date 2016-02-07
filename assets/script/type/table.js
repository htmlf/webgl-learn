/* TABLE - tabular data structuring functions */
/* @wolfram77 / @subhajit */

(function(g) {

	var $ = {};

	// column names
	$.cols = function(t) {
		return Object.keys(t.length!==undefined? (t[0]||{}): t);
	};

	// row count
	$.rows = function(t) {
		return t.length===undefined? (t[Object.keys(t)[0]||' ']||[]).length : t.length;
	};

	// column wise data
	$.colwise = function(t, cs) {
		if(!t.length) return t.length===0? {} : (t||{});
		cs = cs || Object.keys(t[0]);
		for(var c=0, C=cs.length, dst={}; c<C; c++)
			dst[cs[c]] = [];
		for(var r=0, R=t.length; r<R; r++)
			for(c=0; c<C; c++)
				dst[cs[c]][r] = t[r][cs[c]];
		return dst;
	};

	// row wise data
	$.rowwise = function(t, cs) {
		if(t.length>=0) return t;
		cs = cs || Object.keys(t);
		for(var r=0, R=(cs.length? (t[cs[0]]||[]).length : 0), dst=[]; r<R; r++)
			dst[r] = {};
		for(var c=0, C=cs.length; c<C; c++)
			for(r=0; r<R; r++)
				dst[r][cs[c]] = t[cs[c]][r];
		return dst;
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).table = $;
	console.log('type.table> ready!');
})($$);
