const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/',
  output: {
path: path.join(__dirname, 'public/js'),
publicPath: '/public/js',
filename:"bundle.js"
  },
  resolve:{
    extensions: ['ts','.tsx','js'],
    alias:{
      '@': path.join(__dirname, 'src')
    }
  },
  devServer:{
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback:true
  },
  externals:{
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}