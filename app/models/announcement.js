import Model from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  info: DS.attr()
});