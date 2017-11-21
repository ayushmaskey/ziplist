/* eslint-env mocha, chai */
/* global ziplist, zipListTheSimpleWay, chai */

describe('ziplist', function () {
  const list1 = ['a', 'b', 'c'];
  const list2 = [1, 2, 3];
  const zipped = ['a', 1, 'b', 2, 'c', 3];
  describe('ziplist()', function () {
    it('deep should return [\'a\', 1, \'b\', 2, \'c\', 3] for [\'a\', \'b\', \'c\'] and [1, 2, 3]', function () {
      chai.expect(ziplist(list1, list2)).to.deep.equal(zipped);
    });
    it('should return 6 for list length', function () {
      chai.expect(ziplist(list1, list2)).to.deep.have.lengthOf(6);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('deep should return [\'a\', 1, \'b\', 2, \'c\', 3] for [\'a\', \'b\', \'c\'] and [1, 2, 3]', function () {
      chai.expect(zipListTheSimpleWay(list1, list2)).to.deep.equal(zipped);
    });
    it('should return 6 for list length', function () {
      chai.expect(ziplist(list1, list2)).to.deep.have.lengthOf(6);
    });
  });
});
