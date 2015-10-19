/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  grunt.loadTasks('../../tasks');

  grunt.initConfig({
    handlebarslayouts: {
      home: {
        files: {
          //'dist/home.html': 'src/home.html'
          //'dist/*.html': 'src/*.hsb'
          'dist/*.html': 'src/**/*.html'
        },
        options: {
          partials: ['src/partials/*.hbs', 'src/layout.html', 'src/partials/*.md'],
          basePath: 'src/',
          modules: ['src/helpers/helpers-*.js', 'handlebars-helper-moment'],
          context: ['src/pages/**/*.json'],
          templatesPath: 'src'
        }
      }
    }
  });

  grunt.registerTask('default', ['handlebarslayouts']);
};
