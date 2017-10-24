var path = require('path')
var Extractor = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/js/main.js',
    styles: './src/css/styles.less'
  },
  externals: {
    jquery: 'jQuery'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: './'
  },
  module: {
    rules: [{
      test: /\.pug$/i,
      loader: 'pug-loader'
    }, {
      test: /\.less$/i,
      loader: Extractor.extract({
        use: ['css-loader', 'less-loader']
      })
    }, {
      test: /\.(svg|woff|ttf|eot|woff2)$/i,
      loaders: ['file-loader?name=fonts/[name].[hash:base64:5].[ext]']
    }]
  },
  
  plugins: [
    new Extractor({
      filename: '[name].css', allChunks: true
    })
  ]
}
