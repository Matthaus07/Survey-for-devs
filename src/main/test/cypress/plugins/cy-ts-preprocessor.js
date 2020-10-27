const webpackPreProcessor = require('@cypress/webpack-preprocessor')

module.exports = webpackPreProcessor({
  webpackOptions: {
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [{

        test: /\.tsx?$/,
        exclude: /node_module/,
        loader: 'ts-loader'
      }]
    }
  }
})
