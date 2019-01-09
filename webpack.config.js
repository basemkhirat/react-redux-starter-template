const path = require('path');
const hwp = require('html-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = function (env) {


    let plugins = [

        new hwp({
            inject: false,
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: env == "production" ? {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            } : false
        }),

        new ErrorOverlayPlugin()

    ];

    if (env == "production") {

        plugins.push(
            new MinifyPlugin({}, {
                minified: true,
                compact: true,
                comments: false
            })
        );

    }


    return {

        mode: env,

        entry: __dirname + '/src/Index.js',

        output: {
            path: __dirname + '/dist',
            filename: './build.js',
        },

        module: {

            rules: [

                /** Javascript **/

                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                "@babel/preset-react"
                            ]
                        }
                    }
                },

                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                },

                /** CSS **/

                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        // {
                        //     loader: 'postcss-loader',
                        //     options: {
                        //         ident: 'postcss',
                        //         plugins: () => [
                        //             require('postcss-flexbugs-fixes'),
                        //
                        //         ],
                        //         sourceMap: true
                        //     }
                        // },
                        'sass-loader',
                    ],
                },

                /** Images **/

                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: 'url-loader',
                }
            ]
        },

        plugins: plugins,

        devtool: env == 'production' ? false : 'cheap-module-source-map',

        devServer: {
            stats: {
                colors: true,
                hash: false,
                version: false,
                timings: false,
                assets: false,
                chunks: false,
                modules: false,
                reasons: false,
                children: false,
                source: false,
                errors: true,
                errorDetails: true,
                warnings: true,
                publicPath: false
            }
        }
    }

};