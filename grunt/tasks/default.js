module.exports = function(grunt) {
  'use strict';
  grunt.registerTask('default', [
    'clean',
    'sass',
    'assemble',
    'connect',
    'watch'
    ]);
};
