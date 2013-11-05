'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-bower-just-install');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.loadTasks('tasks');

  grunt.registerTask('mkdir', function (dir) {
    require('fs').mkdirSync(dir);
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      test: [
        'tmp',
        'components',
        'bower_components'
      ]
    },

    bower: {
      options: {
        pathFromTo: { from: '../bower_components', to: '../components' }
      },
      source: {
        rjsConfig: 'test/fakeApp/main.js'
      },
    },

    require_map: {
      options: {
        fileName: 'tmp/src.map.js'
      },
      files: {
        src: ['test/fakeApp/scripts/**/*.js', '!test/fakeApp/scripts/app.js'],
        cwd: '.'
      }
    },

    nodeunit: {
      tasks: ['test/unit/test.js']
    }

  });

  

  grunt.registerTask('test', [
    'clean',
    'mkdir:tmp',
    'bower_install',
    'bower',
    'require_map',
    'clean'
  ]);

  grunt.registerTask('default', ['test']);
};
