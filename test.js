var lib = require('./');
var test = require('tape');

function Mixin() {}

Mixin.prototype.foo = function () {
  return 'mixin foo';
};

Mixin.prototype.baz = function () {
  return 'mixin baz';
};

Mixin.prototype.init = function (done) {
  done('mixin init');
};

Mixin.prototype.create = function (done) {
  done('mixin create');
};

function Comp() {}

Comp.prototype.bar = function () {
  return 'comp bar';
};

Comp.prototype.baz = function () {
  return 'comp baz';
};

Comp.prototype.create = function (done) {
  return done('comp create');
};

Comp.prototype.destroy = function (done) {
  return done('comp destroy');
};

test('lib', function (t) {
  t.plan(2);
  t.equal(typeof lib, 'function');
  var mixin = lib(Mixin);
  t.equal(typeof mixin, 'function');
});

test('mixin', function (t) {
  var mixin = lib(Mixin);
  var comp = new Comp();
  mixin(Comp);
  
  t.plan(7);
  t.equal(comp.foo(), 'mixin foo');
  t.equal(comp.bar(), 'comp bar');
  t.equal(comp.baz(), 'comp baz');

  comp.init(function (val) {
    t.equal(val, 'mixin init');
  });

  comp.destroy(function (val) {
    t.equal(val, 'comp destroy');
  });

  var expected = 'mixin create';
  comp.create(function (val) {
    t.equal(val, expected);
    expected = 'comp create';
  });
});
