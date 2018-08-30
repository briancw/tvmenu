const path = require('path')
const webpack = require('webpack')

// Core Deps required for packing
const {VueLoaderPlugin} = require('vue-loader')
const MinifyPlugin = require('babel-minify-webpack-plugin')

// Dev tools
const Visualizer = require('webpack-visualizer-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

const isProduction = process.env.NODE_ENV === 'production'

let config = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        app: './client/entry.js',
    },
    output: {
        path: path.resolve(__dirname, '../', 'public', 'dist'),
        publicPath: './dist/',
        filename: '[name]-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {minimize: isProduction, sourceMap: !isProduction},
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({
                                browsers: ['> 1%', 'last 2 versions'],
                            })],
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"',
        }),
    ],
    optimization: {},
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new Visualizer({filename: '../stats.html'}),
        new MinifyPlugin(),
    )
    config.optimization.splitChunks = {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                chunks: 'initial',
                // chunks: 'all',
                name: 'vendor',
                enforce: true,
            },
        },
    }
} else {
    config.devtool = 'cheap-module-eval-source-map'
    // config.devtool = 'cheap-eval-source-map'
    // config.devtool = 'eval'
    config.plugins.push(new webpack.NoEmitOnErrorsPlugin())

    config.plugins.push(
        new WebpackBuildNotifierPlugin({
            title: 'Webpack Client Build',
            suppressSuccess: true,
        })
    )
}

module.exports = config
