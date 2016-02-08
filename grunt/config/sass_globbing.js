module.exports = function(grunt, config) {
  return {
    dist : {
      files: {
        '<%= config.app %>/themes/default/sass/map/_baseMap.scss': '<%= config.app %>/themes/default/sass/base/**/*.scss',
      }
    }
  };
};
