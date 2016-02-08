module.exports = {
  options: {
    browsers: ['last 2 version', '> 1%', 'ff 17', 'ie 8', 'ie 7']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/css/',
      src: '{,*/}*.css',
      dest: '<%= config.app %>/css/',
      ext: '.css'
    }]
  }
};
