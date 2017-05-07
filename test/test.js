const assert = require('assert');
const demo = require('../');

describe('Basic', function() {
	it('Hello', function() {
		assert.equal('HELLO', demo.main());
	})
});
