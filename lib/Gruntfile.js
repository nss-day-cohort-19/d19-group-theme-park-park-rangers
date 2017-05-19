module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
        js: {
            src: ['../js/**/*.js'],
            dest: '../dist/app.js'

        },
        options: {
            transform: ["hbsfy"],
            browserifyOptions: {
            debug: true,
            paths: [
                "./node_modules"
                ]
            }
        }
    },
    jshint: {
      options: {
        predef: ["document", "console", "park", "parkHeader", "attractionData", "parkType"], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {"$": true, "park" : true}, //name value pairs, allows to define global vars used in many files.
        browserify: true
      },
      files: ['../js/**/*.js'] //location of javascript files
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/styles.css': '../scss/styles.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['../js/*.js'],
        tasks: ['browserify']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
