const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.config.js')

module.exports = function(app, cb) {
    let serverBundle
    let clientManifest
    let template

    // setup on the fly compilation + hot-reload
    webpackConfig.entry.app = ['webpack-hot-middleware/client', webpackConfig.entry.app]
    // TODO isn't noemitonerrors erroneous?
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )

    const clientCompiler = webpack(webpackConfig)
    const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true,
            chunks: false,
        },
    })

    // hot middleware
    app.use(require('webpack-hot-middleware')(clientCompiler))
    app.use(devMiddleware)
}
