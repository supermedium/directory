var fs = require('fs');
var Nunjucks = require('nunjucks');
var path = require('path');

console.log(path.resolve(__dirname, '../'));
var nunjucks = Nunjucks.configure(path.resolve(__dirname, '../'), {
  noCache: true
});

function build () {
  var featured = require('../featured.json');
  fs.writeFileSync('index.html', nunjucks.render('template.html', {
    featured: featured
  }));
}

build();

module.exports.build = build;
