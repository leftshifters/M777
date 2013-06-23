module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// concat: {
		// 	options: { separator: ';' },
		// 	dist: {
		// 		src: [''],
		// 		dest: 'components/M777/<%= pkg.name %>.js'
		// 	}
		// },
		// uglify: {
		// 	options: { banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' },
		// 	dist: {
		// 		files: {
		// 			'public/javascripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
		// 		}
		// 	}
		// },
		// cssmin: {
		// 	add_banner: {
		// 		options: { banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' },
		// 		files: {
		// 			'public/stylesheets/<%= pkg.name %>.min.css' : []
		// 		}
		// 	}
		// },
		copy: {
			main: {
				files: [
					{ expand: false, src: ['components/angular/angular.js'], dest: 'public/javascripts/angular.js' },
					{ expand: false, src: ['components/angular/angular.min.js'], dest: 'public/javascripts/angular.min.js' },
					{ expand: false, src: ['components/pure/build/pure-min.css'], dest: 'public/stylesheets/pure-min.css' }
				]
			}
		}
	});

	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy']);
	grunt.registerTask('default', ['copy']);

}