module.exports = function(grunt){

    // Project configuration.
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify: {
            build : {
				src : ["js/main.js"],
				dest : "js/main.min.js"
			}
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    


};