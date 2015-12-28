module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'lib/bin/*.js']
    },
    sasslint: {
        options: {
            configFile: 'sass-lint.yml',
        },
        target: ['lib/**/*.scss']
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'dist/css/main.css': 'lib/scss/main.scss'
            }
        }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/main.min.css': ['dist/css/main.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'sasslint']);
  grunt.registerTask('sassy', ['sass']);
  grunt.registerTask('buildcss', ['sass', 'cssmin']);
};