'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const merge = require('webpack-merge');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const bundleAnalyzer = require('webpack-bundle-analyzer');
const path = require('path');
const wp = require("webpack");

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.sass.setConfig({
    sassMatch: []
});

build.configureWebpack.setConfig({
    additionalConfiguration: function (config) {
        // config.plugins[1] = new UglifyJSPlugin(); 
        const lastDirName = path.basename(__dirname);
        const dropPath = path.join(__dirname, 'temp', 'stats');
        
        var vueConfig = {
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.esm.js'
                }
            },
            plugins:[
                // new UglifyJSPlugin(), // needed for dead code removal
                new bundleAnalyzer.BundleAnalyzerPlugin({
                    openAnalyzer: false,
                    analyzerMode: 'static',
                    reportFilename: path.join(dropPath, `${lastDirName}.stats.html`),
                    generateStatsFile: true,
                    statsFilename: path.join(dropPath, `${lastDirName}.stats.json`),
                    logLevel: 'error'
                })
            ],
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        use: [
                            {
                                loader: 'vue-loader',
                                options: {
                                    esModule: true,
                                    loaders: {
                                        scss:[
                                            { loader: '@microsoft/loader-load-themed-styles'},
                                            { loader: 'css-loader'},
                                            { loader: 'sass-loader'},
                                        ],
                                        js: [
                                            { loader: 'babel-loader', options: { presets: [['env', { 
                                                'modules': false, 
                                                'targets': {
                                                    'browsers': ['> 2%']
                                                }
                                            }]]}}
                                        ]
                                    }
                                }
                            }]
                    },
                ]
            },
        };
        return merge(config, vueConfig);
    }
});

// #### webpack-bundle-analyser start
// build.configureWebpack.mergeConfig({ 
//     additionalConfiguration: (generatedConfiguration) => { 
//         generatedConfiguration.plugins.push();
      
//         return generatedConfiguration; 
//     } 
// });
// #### webpack-bundle-analyser END

let copyOtherFiles = build.subTask('copy-other-files', function(gulp, buildOptions, done){
    return gulp.src(['src/**/*.vue', 'src/**/*.scss'])
               .pipe(gulp.dest(buildOptions.libFolder))
});
build.task('copy-other-files', copyOtherFiles);
build.rig.addPostTypescriptTask(copyOtherFiles);

gulp.task('default', ['bundle']);

build.initialize(gulp);
