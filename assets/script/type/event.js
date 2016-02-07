/* EVENT - defines an event emitter */
/* @wolfram77 / @subhajit */

(function(g) {

	var $ = function(v) {
		v = v||{};
		this.sub = v.sub||{};	// subscriptions
	};
	var p = $.prototype;

	// get subscriptions
	p.get = function() {
		return this.sub;
	};

	// add subscription
	p.on = function(e, fn) {
		this.sub[e] = this.sub[e]||[];
		if(this.sub[e].indexOf(fn)<0) this.sub[e].push(fn);
		return this;
	};

	// remove subscription
	p.off = function(e, fn) {
		if(typeof e==='undefined') this.sub = {};
		else if(typeof fn==='undefined') this.sub[e] = [];
		else { var i = (this.sub[e]||[]).indexOf(fn); this.sub[e].splice(i, i>=0? i : 0); }
		return this;
	};

	// declare/publish event
	p.is = function(e, args) {
		var o = this;
		$.nextTick(function() { o._call(e, args); });
		return this;
	};

	// private: call functions
	p._call = function(e, args) {
		for(var se=this.sub[e], i=0, I=se? se.length : 0; i<I; i++)
			se[i](args);
	};

	// run function on next tick
	$.nextTick = function(fn) {
		this._tqueue.push(fn);
		if(this._tqueue.length===1) setTimeout(this._ftick, 0);
		return this;
	};

	// private: next tick support function
	$._ftick = function() {
		for(var i=0, I=this._tqueue.length; i<I; i++)
			this._tqueue.pop()();
	};

	// private: next tick queue
	$._tqueue = [];

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.type=g.type||{}).event = $;
	console.log('type.event> ready!');
})($$);
