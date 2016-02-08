const expect = require('chai').expect;

const twoString = require('../src/index.js');

describe('twoString', function testTwoString() {
  it('should return a two string', function checkReturnsTwoString() {
    const result = twoString();
    expect(result).to.equal('2');
  });
});
