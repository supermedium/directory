var build = require('./build').build;
var fs = require('fs');

fs.watch('./', {recursive: true}, () => { build(); });
