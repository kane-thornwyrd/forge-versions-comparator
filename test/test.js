const assert = require('assert');

const forgeVersionComparator = require('..');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

describe('Standard cases', () => {
  describe('Comparing 2 forge version numbers', () => {
    it('should return 1 when the first is higher', () => {
      assert.equal(1, forgeVersionComparator('14.21.1.2387', '12.18.3.2316'));
    });
    it('should return -1 when the second is higher', () => {
      assert.equal(-1, forgeVersionComparator('12.18.3.2316', '14.21.1.2387'));
    });
    it('should return 0 when they are equal', () => {
      assert.equal(0, forgeVersionComparator('12.18.3.2316', '12.18.3.2316'));
    });
  });
});
describe('Erroring cases', () => {
  describe('Comparing forge version numbers to something else', () => {
    it('should throw "Error: Not a forge version number !" when the first is something else', () => {
      assert.throws(
        () => forgeVersionComparator('121832316', '14.21.1.2387'), /Not a forge version number !/,
      );
    });
    it('should throw "Error: Not a forge version number !" when the second is something else', () => {
      assert.throws(
        () => forgeVersionComparator('14.21.1.2387', '121832316'), /Not a forge version number !/,
      );
    });
    it('should throw "Error: Not a forge version number !" when both are something else', () => {
      assert.throws(
        () => forgeVersionComparator('121832316', '121832316'), /Not a forge version number !/,
      );
    });
  });
});
