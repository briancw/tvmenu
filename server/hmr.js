const path = require('path')
const webpack = require('webpack')
const clientConfig = require('../build/webpack.client.config.js')

module.exports = function(app, cb) {
    let serverBundle
    let clientManifest
    let template

    // setup on the fly compilation + hot-reload
    clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app]
    clientConfig.output.filename = '[name].js'
    // TODO isn't noemitonerrors erroneous?
    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )

    const clientCompiler = webpack(clientConfig)
    const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        stats: {
            colors: true,
            chunks: false,
        },
    })

    // hot middleware
    app.use(require('webpack-hot-middleware')(clientCompiler))
    app.use(devMiddleware)

    // When the clientside code is done compiling initial manifests
    clientCompiler.plugin('done', () => {
        console.log('client done')
        const fs = devMiddleware.fileSystem
        const templatePath = path.join(clientConfig.output.path, 'index.html')
        const clientManifestPath = path.join(clientConfig.output.path, 'vue-ssr-client-manifest.json')
        if (fs.existsSync(templatePath) && fs.existsSync(clientManifestPath)) {
            template = fs.readFileSync(templatePath, 'utf-8')
            clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, 'utf-8'))

            cbIfReady()
        }
    })

    /**
     * Callback when the client compiler has compiled the clientManifest and template
     * And the server compiler has compiled the serverBundle
     * @function cbIfReady
     */
    function cbIfReady() {
        // If the server bundle, clientManifest, and template have all been generated, call back
        if (serverBundle && clientManifest && template) {
            cb(serverBundle, clientManifest, template)
        }
    }
}
