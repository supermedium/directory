var featured = require('./sites.json').reverse();

var client = algoliasearch('QULTOY3ZWU', '4ac532d3ddfcadcecd3954894051527e');
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
