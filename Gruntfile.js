module.exports = function(grunt) {
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          'styles/main.css': 'styles/main.less'
        }
      }
    },

    uglify: {
      target: {
        files: {
          'scripts/main.min.js': 'scripts/main.js'
        }
      }
    },

    concurrent: {
      target: ['less', 'uglify']
    }


  })

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concurrent']);
}