/* eslint-env mocha, chai */
/* global zipListTheSimpleWay, ziplist, chai */

describe('ziplest', function () {
  const list1 = ['a', 'b', 'c'];
  const list2 = [1, 2, 3];
  const zipped = ['a', 1, 'b', 2, 'c', 3];
  describe('ziplist()', function () {
    it('should return zipped for list1 list2', function () {
      chai.expect(ziplist(list1, list2)).to.deep.equal(zipped);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should return zipped for list1 list2', function () {
      chai.expect(zipListTheSimpleWay(list1, list2)).to.deep.equal(zipped);
    });
  });
});