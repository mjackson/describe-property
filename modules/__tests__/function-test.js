var expect = require('expect');
var d = require('../describeProperty');

describe('describeProperty', function () {
  
  describe('when using a plain function', function () {
    var descriptor, fn;
    beforeEach(function () {
      descriptor = d(fn = function () {});
    });

    it('uses the function as the value', function () {
      expect(descriptor.value).toBe(fn);
    });

    it('is configurable', function () {
      expect(descriptor.configurable).toBe(true);
    });

    it('is not enumerable', function () {
      expect(descriptor.enumerable).toBe(false);
    });

    it('is writable', function () {
      expect(descriptor.writable).toBe(true);
    });
  });

});
