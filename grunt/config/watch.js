module.exports = {
  options: {
    livereload: true
  },
  grunt: {
    files: ['grunt/**/*.js'],
    tasks: ['jshint:grunt']
  },
  'assemble': {
    files: [
    'app/themes/{,*/}/templates/layouts/{,*/}/*.hbs',
    'app/themes/{,*/}/templates/partials/{,*/}/*.hbs',
    'app/sites/**/{,*/}*.hbs'],
    tasks: ['assemble']
  },
  'sass' : {
    files: [
    'app/themes/{,*/}/sass/{,*}/*.scss'
    ],
    tasks: ['sass_globbing','sass']
  }
};
