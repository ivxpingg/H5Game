module.exports = function(grunt) {
    'use strict';
    // console.dir(require('./compileSass')().sass);
    console.dir(__dirname);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '',
        compileSass: require('./compileSass')(),
        watch: {
            dev: {
                files: ["build/scss/*.scss", "build/scss/**/*.scss","build/scss/**/**/*.scss"],
                tasks: ['sass']
            },

            pro: {
                files: ["build/scss/*.scss", "build/scss/**/*.scss","build/scss/**/**/*.scss"],
                tasks: ['sass','autoprefixer']
            }
        },

        sass: {
            development: {
                options: {
                    style: 'expanded'
                },
                files: '<%= compileSass.sass %>'
            }
        },
        autoprefixer: {
            dist: {
                files: '<%= compileSass.autoprefixer %>'
            }
        },


        concat: {
            sxc: {
                options: {
                    banner: '/* sxc */',
                    separator: ';',
                    sourceMap: true
                },
                src: ['build/js/common/init.js',
                      'build/js/common/com.js',
                      'build/js/common/tooltip.js',
                      'build/js/common/toast.js',
                      'build/js/common/loading.js'],
                dest: 'dist/js/util/sxc.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');    //监测
    grunt.loadNpmTasks('grunt-sass');     //css编译
    grunt.loadNpmTasks('grunt-contrib-uglify');   //压缩
    grunt.loadNpmTasks('grunt-contrib-clean');    //清除
    grunt.loadNpmTasks('grunt-contrib-concat');   //合并
    grunt.loadNpmTasks('grunt-contrib-jshint');   //检验js
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default',['watch:dev']);
    grunt.registerTask('dev',['watch:dev']);
    grunt.registerTask('pro',['sass','autoprefixer']);
    grunt.registerTask('css',['sass']);
    grunt.registerTask('js',['concat']);
};
