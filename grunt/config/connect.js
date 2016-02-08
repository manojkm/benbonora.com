module.exports = function(grunt) {
  'use strict';
  var config = grunt.file.readJSON('./Gruntconfig.json');
  return {
    options: {
      port: 9000,
      keepalive: false,
      hostname: '127.0.0.1',
      open: true,
      debug: false,
      base: 'dist'
    },
    livereload: {
      options: {
        middleware: function(connect) {
           return [
            connect().use('/themes', connect.static('./' + config.app + '/themes')),
            connect().use('/bower_components', connect.static('./bower_components')),
            connect.static(config.dist),
           ];
         },
      }
    }
  };
};
