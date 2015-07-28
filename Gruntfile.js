module.exports = function (grunt) {
    "use strict";
	
    var jsfiles = ['README.md', 'package.json', 'src/js/**/*.js'],
        banner = '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n';
    
	// Force use of Unix newlines
	grunt.util.linefeed = '\n';

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		/**
		* Less
		*/
		less: {
			dev: {
                files: {
				    'public/css/styles.min.css': 'src/css/**/*.less'
                },
				options: {
					cleancss: true,
					cleancssOptions: {
						keepSpecialComments: '*'
					},
					banner: banner
				}
			}
		},

		/**
		* Watch
		*/
		watch: {
			scripts: {
				files: jsfiles,
				tasks: ['uglify']
			},
			less: {
				files: ['src/css/**/*.less'],
				tasks: ['less']
			}
		},
        
        /**
        * uglify
        */
        uglify: {
            def: {
                files: {
                    "public/js/scripts.min.js": ['src/js/**/*.js']
                }
            }
        }
	});
	
	// load tasks
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-uglify");
	// register tasks
	grunt.registerTask('default', ['uglify', 'less']);
};