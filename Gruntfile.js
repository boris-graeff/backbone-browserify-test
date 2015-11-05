module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.initConfig({

        uglify: {
            bundle : {
                files : {
                    'dist/bundle.min.js' : 'dist/bundle.js'
                }
            }
        },

        browserify: {
            options: {
                transform: ['hbsfy']
            },
            dist: {
                files: {
                    'dist/bundle.js': 'src/index.js'
                }
            }
        },

        connect: {
            'localhost': {
                options: {
                    hostname: '*',
                    port: 7000,
                    base: ['.']
                }
            }
        },

        watch: {
            less: {
                files: [
                    'src/**/*.less'
                ],
                tasks: ['style'],
                options: {spawn: false}
            },
            js: {
                files: [
                    'src/**/*.js',
                    'src/**/*.hbs'
                ],
                tasks: ['js'],
                options: {spawn: false}
            }
        },

        less: {
            app: {
                files: {
                    'dist/app.css': [
                        'src/main.less'
                    ]
                }
            }
        },

        copy: {
            fonts: {
                cwd: 'medias/font/',
                src : '**',
                dest: 'dist/medias/font/',
                expand: true
            }
        },

        clean: {
            dist : ["dist/"]
        },

        postcss: {
            options: {
                map: false,

                processors: [
                    require('autoprefixer')({browsers: ['> 1%']}),
                    require('cssnano')()
                ]
            },
            app : {
                src: 'dist/app.css'
            }
        }

    });

    grunt.registerTask('default', ['clean', 'copy', 'style', 'js', 'connect', 'watch']);
    grunt.registerTask('style', ['less', 'postcss']);
    grunt.registerTask('js', ['browserify', 'uglify']);
};