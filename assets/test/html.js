var testAttr = function() {
	var $p = $$.code.process;
	var $h = $$.html.index;
	var ld = $h().find('div');
	console.log('testing lib: html.attr');
	var libT0 = $p.now();
	for(var i=0; i<200; i++) {
		ld.attr('values', '0');
		ld.attr('values', '0');
		ld.attr('values', '0');
		ld.attr('values', '0');
	}
	var libT1 = $p.now();
	console.log('200 x 4 took '+(libT1-libT0)+' ms');
	var jd = $('div');
	console.log('testing jquery: html.attr');
	var jqT0 = $p.now();
	for(var i=0; i<200; i++) {
		jd.attr('value', '0');
		jd.attr('value', '0');
		jd.attr('value', '0');
		jd.attr('value', '0');
	}
	var jqT1 = $p.now();
	console.log('200 x 4 took '+(jqT1-jqT0)+' ms');
};
