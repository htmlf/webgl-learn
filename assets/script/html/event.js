/* EVENT - manage events with html elements */
/* @wolfram77 / @subhajit */

(function(g, $e) {

	var $ = function(v) {
		v = v||{};
		this.set = v.set||[];
	};
	var p = $.prototype;

	// add event subscription
	p.on = function(e, fn) {
		for(var i=this.set.length; i--;) {
			this.set[i].addEventListener(e, fn, false);
			(this.set[i].$event=this.set[i].$event||(new $e())).on(e, fn);
		}
		return this;
	};

	// remove event subscription
	p.off = function(e, fn) {
		var de = typeof e!=='undefined', df = typeof fn!=='undefined';
		for(var i=this.set.length; i--;) {
			var ie = this.set[i].$event, es = ie? ie.get() : {};
			if(de && df) { this.set[i].removeEventListener(e, fn, false); if(ie) ie.off(e, fn); continue; }
			if(de) { var _es = es; es={}; es[e] = _es[e]; }
			for(var ev in es)
				for(var fs=es[ev]||[], j=fs.length; j--;)
					this.set[i].removeEventListener(ev, fs[j], false);
			if(ie) ie.off(de? e : undefined);
		}
		return this;
	};

	// declare/publish event
	p.is = function(e, args) {
		if(typeof args==='undefined') { for(var i=this.set.length; i--;) this.set[i].dispatchEvent(new Event(e)); }
		else { for(var i=this.set.length; i--;) this.set[i].dispatchEvent(new CustomEvent(e, args)); }
		return this;
	};

	// private: remove all listeners for one event
	p._eventOffOne = function(elem, e, fns) {
		for(var i=fns.length; i--;) elem.removeEventListener(e, fns[i]);
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.html=g.html||{}).event = $;
	console.log('html.event> ready!');
})($$, $$.type.event);
