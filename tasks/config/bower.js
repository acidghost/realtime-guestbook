/**
 * Install bower components.
 *
 * ---------------------------------------------------------------
 *
 * Installs bower components and copies the required files into the assets folder structure.
 *
 */

module.exports = function(grunt) {

  grunt.config.set('bower', {
    dev: {
      dest: './assets/js/dependencies',
      js_dest: './assets/js/dependencies',
      css_dest: './assets/styles/dependencies',
      less_dest: './assets/styles/dependencies',
      fonts_dest: './assets/fonts',
      options: {
        keepExpandedHierarchy: false,
        packageSpecific: {
          'bootstrap': {
            keepExpandedHierarchy: true,
            stripGlobBase: true,
            files: [
              'less/**/*.less',
              //'dist/js/bootstrap.js',
              'dist/fonts/**/*'
            ]
          },
          'angular-bootstrap': {
            files: [
              'ui-bootstrap.js',
              'ui-bootstrap-tpls.js'
            ]
          }
        }
      }
    }
  });

	grunt.loadNpmTasks('grunt-bower');
};
