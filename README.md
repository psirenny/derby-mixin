Derby Mixin
===========

Extend your Derby JS components with reusable mixins.
It ensures the standard lifecycle methods `init()` and `create()` are invoked on both your component and the mixin.

Installation
------------

    npm install derby-mixin --save

Usage
-----

    var mixin = require('mixin');

    function RobotMixin () {}

    RobotMixin.prototype.create = function () {
      console.log('beep');
    };

    function CyborgDogComponent () {}

    CyborgDogComponent.prototype.create = function () {
      console.log('bark');
    }

    mixin(RobotMixin, RobotDogComponent);
