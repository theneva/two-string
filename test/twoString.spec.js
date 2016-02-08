const expect = require('chai').expect;

const twoString = require('../src/index.js');

describe('twoString', () => {
  it('should return a two string', () => {
    const result = twoString();
    expect(result).to.equal('2');
  });
});
