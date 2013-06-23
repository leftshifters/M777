module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['components/angular/angular.js'],
				dest: 'components/M777/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'public/javascripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		cssmin: {
			add_banner: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'public/stylesheets/<%= pkg.name %>.min.css' : [ 'components/pure/src/base/css/*.css', 'components/pure/src/buttons/css/*.css', 'components/pure/src/forms/css/*.css', 'components/pure/src/grids/css/*.css', 'components/pure/src/menus/css/*.css', 'components/pure/src/tables/css/*.css' ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

}