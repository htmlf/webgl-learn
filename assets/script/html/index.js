/* INDEX - defines the main html contructor */
/* @wolfram77 / @subhajit */

(function(g, $h) {

	var $ = function(v) {
		if(!v) v = document.documentElement;
		else if(typeof v==='string') { var ve = document.createElement('a'); ve.innerHTML = v; v = ve.children; }
		return new $h({'set': $h._baseElements(v)});
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.html=g.html||{}).index = $;
	console.log('html.index ready!');
})($$, $$.html.base);
