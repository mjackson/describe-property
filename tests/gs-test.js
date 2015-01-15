var expect = require('expect');
var d = require('../index');

describe('describeProperty.gs', function () {
  var descriptor, getter, setter;

  describe('when a setter is not provided', function () {
    beforeEach(function () {
      descriptor = d.gs(getter = function () {});
    });

    it('has a get property', function () {
      expect(descriptor.get).toBe(getter);
    });

    it('does not have a set property', function () {
      expect(descriptor.set).toBe(undefined);
    });

    it('is configurable', function () {
      expect(descriptor.configurable).toBe(true);
    });

    it('is not enumerable', function () {
      expect(descriptor.enumerable).toBe(false);
    });

    it('does not have a writable property', function () {
      expect(descriptor.writable).toBe(undefined);
    });
  });

  describe('when a setter is provided', function () {
    beforeEach(function () {
      descriptor = d.gs(getter = function () {}, setter = function () {});
    });

    it('has a get property', function () {
      expect(descriptor.get).toBe(getter);
    });

    it('has a set property', function () {
      expect(descriptor.set).toBe(setter);
    });

    it('is configurable', function () {
      expect(descriptor.configurable).toBe(true);
    });

    it('is not enumerable', function () {
      expect(descriptor.enumerable).toBe(false);
    });

    it('does not have a writable property', function () {
      expect(descriptor.writable).toBe(undefined);
    });
  });

});
