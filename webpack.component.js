const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const components = require('./components.json');

const webpackConfig = {
    mode: 'production',
    entry: components,
    output: {
        path: path.resolve(process.cwd(), './lib'),
        filename: '[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: ['node_modules']
    },
    performance: {
        // hints: false
    },
    stats: 'none',
    optimization: {
        // minimize: false
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin()
    ]
};

module.exports = webpackConfig;
