module.exports = function (grunt) {
  'use strict';


  require('time-grunt')(grunt);

  var _ = require("underscore");
  var config = grunt.file.readJSON("Gruntconfig.json");
  var path = require('path');
  var pkg = grunt.file.readJSON('./package.json');

  // Pull in custom settings to the config file.
  if (grunt.file.exists("Gruntconfig--custom.json")) {
    var customConfigOverrides = grunt.file.readJSON("Gruntconfig--custom.json");
    _.extend(config, customConfigOverrides);
  }

  var output = [];
  var themes = grunt.file.expand(
      {
        filter: 'isDirectory',
        cwd:  config.app + '/themes',
      },['*']);

  var sass_dirs = themes.map(function(theme, index){

    var tmp = grunt.file.expand(
    {
      filter: 'isDirectory',
      cwd: config.app + '/themes/' + theme + '/sass'
    },['*','!map','!vars']);

    tmp.forEach(function(item,index){
      console.log(index);
      output[index] = 'test - ' + item ;
    });
    return output;
  });

  console.log(sass_dirs);

  grunt.loadNpmTasks('grunt-notify');

  grunt.initConfig({
    config: config,
    pkg: pkg
  });

  // load all config files
  require('load-grunt-config')(grunt, {
    configPath: [
    path.join(process.cwd(), 'grunt/'), path.join(process.cwd(), 'grunt/config'), path.join(process.cwd(), 'grunt/tasks')],
    data: {
      // config settings
      pkg: pkg,
      config: config
    }
  });

  // add shell scripts to grunt shell:<SCRIPT_NAME>
  var files = grunt.file.expand('bin/*.sh');
  if (files) {
    for (var f in files) {
      var name = files[f].split('/').pop().split('.').shift();
      grunt.config(['shell', name], {
        command: './' + files[f]
      });
      grunt.registerTask(name, ['shell:' + name]);
    }
  }

};
