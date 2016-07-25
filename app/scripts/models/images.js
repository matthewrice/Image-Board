var Backbone = require('backbone');

var ImageModel = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/riceimageboard/'
});

var ImageCollection = Backbone.Collection.extend({
  model: ImageModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/riceimageboard/'
});

module.exports = ImageCollection;
