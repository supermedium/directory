var featured = require('./featured.json');

var client = algoliasearch('QULTOY3ZWU', 'b15ba0aed681d0358d9cf5d6bfb132ae');
var index = client.initIndex('sites');

var app = new Vue({
  el: '#app',
  data: {
    sites: featured
  },
  methods: {
    search: function (event) {
      var query;
      query = event.target.value;

      // No query, show sites.
      if (!query) {
        this.sites = featured;
        return;
      }

      // Search.
      index.search({query: query}, (err, content) => {
        this.sites = content.hits;
      });
    }
  }
});
