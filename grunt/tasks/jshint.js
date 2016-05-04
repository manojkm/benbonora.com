module.exports = {
  options: {
    browser: true,
    curly: true,
    devel: true,
    eqeqeq: true,
    evil: true,
    immed: true,
    indent: 2,
    regexdash: true,
    sub: true,
    trailing: true,
    unused: true,
    white: true,
    globals: {
      jQuery: true,
      modernizer: true
    },
    force: true,
  },
  app: {
    src: ['app/themes/**/js/*.js']
  },
  grunt: {
    src: ['Gruntfile.js','grunt/**/*.js']
  }
};
