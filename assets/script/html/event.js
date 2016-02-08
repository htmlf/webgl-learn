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
	p.off - function(e, fn) {
		for(var eo, i=this.set.length; i--;) {
			if(!(eo=this.set[i].$event)) continue;
			if(!e) for(var ev in eo.get()) this._eventOffOne(this.set[i], ev, eo.get()[ev]);
			else if(!fn) this._eventOffOne(this.set[i], e, eo.get()[e]||[]);
			else this.set[i].removeEventListener(e, fn);
			eo.off(e, fn);
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
})($$, $$.code.event);
