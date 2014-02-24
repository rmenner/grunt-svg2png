/*
 * grunt-svg2png-clone
 * https://github.com/bjork24/grunt-svg2png-clone
 *
 * Copyright (c) 2014 Dan Chilton
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt)
{

    grunt.initConfig({

        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/**/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            tests: ['test/**/*.png']
        },

        nodeunit: {
            tests: ['test/*_test.js']
        },

        svg2png: {
            all: {
                files: [
                    { src: ['test/**/*.svg'], dest: 'test/png/' }
                ]
            }
        }

    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['clean', 'svg2png', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'test']);

};
