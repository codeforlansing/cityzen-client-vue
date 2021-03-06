const webpack = require('webpack')

module.exports = {
  // Do not put unique hash in generated bundle name
  filenameHashing: false,
  configureWebpack: {
    // Name the bundle 'volunteer-tasks' (dist/js/volunteer-tasks.js)
    entry: {
      'volunteer-tasks': './src/main.js'
    },
    plugins: [
      // Do not split the bundle up into chunks (generate 1 file)
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  chainWebpack: config => {
    // Delete the always-generated bundle
    // https://github.com/vuejs/vue-cli/issues/2969
    config.optimization.delete('splitChunks')
    config.entryPoints.delete('app')
  },
  devServer: {
    proxy: {
      // proxy all /api requests to localhost:3000 to avoid CORS issues
      '/api': {
        target: `http://localhost:${process.env.PORT || 3000}`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
