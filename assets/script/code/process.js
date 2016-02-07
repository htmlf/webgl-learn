/* PROCESS - process details for browser */
/* @wolfram77 / @subhajit */

(function(g, $e) {

	// ready?
	if(typeof module!=='undefined') {
		module.exports = process;
		(g.code=g.code||{}).process = process;
		return;
	}

	var $ = {};

	// high-res time (now)
	$.now = performance.now? function() { return performance.now(); } : Date.now;

	// uptime since navigation
	$.uptime = function() {
		return this.now() - this._tload;
	};

	// high-res time (with nanoseconds)
	$.hrtime = function() {
		var ms = this.now();
		return [parseInt(ms/1000, 10), (ms % 1000)*1000000];
	};

	// js memory usage
	$.memoryUsage = function() {
		var v = (performance||{}).memory||{};
		return {'rss': v.jsHeapSizeLimit||0, 'heapTotal': v.totalJSHeapSize||0, 'heapUsed': v.usedJSHeapSize||0};
	};
	
	// run function on next tick
	$.nextTick = $e.nextTick;

	// platform
	$.platform = function() {
		return navigator.platform;
	};

	// title
	$.title = function(val) {
		if(typeof val==='undefined') return document.title;
		else document.title = val;
		return this;
	};

	// private: module load time
	$._tload = $.now();


	// ready
	(g.code=g.code||{}).process = $;
	console.log('code.process> ready!');
})($$, $$.type.event);
