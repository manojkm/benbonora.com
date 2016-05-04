module.exports = function(grunt, config) {

  var output = {};
  var filesMap = grunt.file.expand({
    cwd: 'app/themes',
    filter: 'isDirectory'
  },['**/sass/**','!**/sass/map', '!**/sass/vars']);

  filesMap.forEach(function(item){
    parts = item.split('/');

    if (2 in parts) {
      var mapDest = config.config.app + '/themes/' + parts[0] + '/sass/map/_' + parts[2] + 'Map.scss';
      var mapSrc = config.config.app + '/themes/' + parts[0] + '/sass/' + parts[2] +'/*.scss';

      output[mapDest] = mapSrc;
    }
  });
  return {
    dist : {
      files: output
    }
  };
};
