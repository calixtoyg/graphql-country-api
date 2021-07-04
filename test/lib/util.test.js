const { isEmpty } = require('../../src/lib/util');
describe('Utils tests', function() {

  it('should return true if object is empty', function() {
    expect(isEmpty({})).toBe(true)
  });

  it('should return false if object is not empty', function() {
    expect(isEmpty({data: ''})).toBe(false)
  });

});
