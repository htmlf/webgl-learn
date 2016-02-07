/* PARALLEL - define a function call parallelizer */
/* @wolfram77 / @subhajit */

(function(g, $p) {

	var $ = function(v) {
		v = v||{};
		this.fns = v.fns||[];
		this.end = v.end;
	};
	var p = $.prototype;

	// run function (parallely)
	p.run = function(fn) {
		var o = this;
		this.fns.push(fn);
		if(this.fns.length===1) $p.nextTick(function() { o._call(); });
		return this;
	};

	// indicate completion of function call
	p.done = function() {
		this.fns.pop();
		if(this.fns.length===0 && this.end) this.end();
		return this;
	};

	// private: call functions
	p._call = function() {
		for(var i=0, I=this.fns.length; i<I; i++)
			this.fns[i]();
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.code=g.code||{}).parallel = $;
	console.log('code.parallel> ready!');
})($$, $$.code.process);
