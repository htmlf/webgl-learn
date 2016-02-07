/* @wolfram77 */
/* SERIAL - defines a function call serializer */

(function(g, $p) {

	var $ = function(v) {
		v = v||{};
		this.fns = v.fns||[];
		this.end = v.end;
	};
	var p = $.prototype;

	// run function (serially)
	p.run = function(fn) {
		this.fns.push(fn);
		if(this.fns.length===1) $p.nextTick(this.fns[0]);
		return this;
	};

	// indicate completion of function call
	p.done = function() {
		this.fns.shift();
		if(this.fns.length>0) $p.nextTick(this.fns[0]);
		else if(this.end) this.end();
		return this;
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.code=g.code||{}).serial = $;
	console.log('code.serial> ready!');
})($$, $$.code.process);
