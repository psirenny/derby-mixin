var _ = require('lodash');

module.exports = function (mixin) {
  var derbyMethods = ['init', 'create', 'destroy'];
  mixin = mixin.prototype;
  return function (comp) {
    comp = comp.prototype;
    _.forIn(mixin, function (val, key) {
      if (!comp[key]) return (comp[key] = val);
      if (!_.contains(derbyMethods, key)) return;
      var temp = comp[key];
      comp[key] = function () {
        var args = Array.prototype.slice.call(arguments);
        mixin[key].apply(this, args);
        temp.apply(this, args);
      };
    });
  };
};
