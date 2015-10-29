const assert = require('assert');

describe('User visits home page', () => {

  it('should see the home page', () => {
    assert.equal(1+1,2);
  });

  // describe('posts comment', () => {
  //   before((done) => {
  //     browser
  //       .fill('author', 'Me')
  //       .fill('body', 'Hey, yo!')
  //       .pressButton('Post', done);
  //   });

  //   it('should see the comment', function() {
  //     browser.assert.text('.comment', 'Hey, yo!');
  //   });
  // });
});
