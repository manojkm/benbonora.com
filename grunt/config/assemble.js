module.exports = {
  options: {
    layout: 'app/themes/default/templates/layouts/default-layout.hbs',
    removeHbsWhitespace: true,
  },
  siteDefault: {
    options: {
      data: ['app/sites/default/config.json','app/sites/default/data/**/*.json'],
      partials: ['app/themes/default/templates/partials/**/*.hbs'],
      flatten: true
    },
    files: {
      'dist/' : ['app/sites/default/pages/**/*.hbs']
    }
  },
  siteDefaultBlogs: {
    options: {
      flatten: true
    },
    files: {
      'dist/blogs/': ['app/sites/default/blogs/**/*.hbs']
    }
  }
};
