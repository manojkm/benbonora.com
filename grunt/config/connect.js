module.exports = function(grunt) {
  'use strict';
  var config = grunt.file.readJSON('Gruntconfig.json');
  var serveStatic = require('serve-static');
  return {
    server:{
      options: {
        port: 9000,
        keepalive: false,
        hostname: '127.0.0.1',
        open: true,
        debug: false,
        base: config.dist,
        livereload: true,
        middleware: function(connect) {
            return [
                serveStatic('dist'),
                connect().use(
                    '/themes',
                    serveStatic('app/themes')
                )
            ];
        },
      },
    },
  };
};
