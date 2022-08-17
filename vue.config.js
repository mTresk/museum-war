const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/museum-war/'
        : '/',
    configureWebpack: {
        devServer: {
            historyApiFallback: true
        }
    }
})
