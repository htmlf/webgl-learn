/* RUN - build and run the server */
/* @wolfram77 */

// required modules
global.$$ = {}; // modules container
var fs = require('fs');
var childProcess = require('child_process');
var $process = require('./assets/script/type/event');
var $process = require('./assets/script/code/process');
var $serial = require('./assets/script/code/serial');


// check if directory exists
var dirExists = function(path) {
	try { return fs.lstatSync(path).isDirectory(); }
	catch(e) { return false; }
};


// run shell command (serial)
var shell = function(cmd, fn) {
	var c = childProcess.exec(cmd, fn);
	c.stdout.pipe(process.stdout);
	c.stderr.pipe(process.stderr);
};

// has dependencies?
var hasDeps = function() {
	if(!dirExists('node_modules')) return false;
	var pkg = JSON.parse(fs.readFileSync('package.json'));
	var deps = (Object.keys(pkg.dependencies||{})).concat(Object.keys(pkg.devDependencies||{}));
	for(var i=0; i<deps.length; i++)
		if(!dirExists('node_modules/'+deps[i])) return false;
	return true;
};

// run program
var run = function() {
	var shellser = new $serial();
	if(!hasDeps()) shellser.run(function() {
		console.log('\x1b[36m'+'run> installing dependencies'+'\x1b[0m');
		shell('npm install', function() { console.log('\n'); shellser.done(); });
	});
	shellser.run(function() {
		console.log('\x1b[36m'+'run> starting server'+'\x1b[0m');
		shell('node index', function() { console.log('\x1b[36m'+'run> server stopped'+'\x1b[0m'); shellser.done(); });
	});
};

// ready
run();
