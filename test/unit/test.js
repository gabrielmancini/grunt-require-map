'use strict';
var grunt = require('grunt')

exports.bowerRJS = {
	wireupComponent: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/src.map.js');
		var expected = grunt.file.read('test/fixtures/src.map-expected.js');
		test.deepEqual(actual, expected, 'should wireup components in RequireJS to map');

		test.done();
	}
};
