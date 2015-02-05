Derby Mixin
===========

Extend your Derby JS components with reusable mixins.  
It ensures the standard lifecycle methods `init()`, `create()` and `destroy()` are always called.

[![Build Status](https://travis-ci.org/psirenny/derby-mixin.png?branch=master)](https://travis-ci.org/psirenny/derby-mixin)

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
