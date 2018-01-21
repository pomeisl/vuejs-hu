const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  devtool: 'cheap-source-map',
  entry: {
    commons: ['axios', 'jquery', 'vue', 'vuex'],
    app: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: { }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          js: 'babel-loader!eslint-loader'
        }
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'My App'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      filename: "commons.js",
      name: "commons"
    })
  ],
  devServer: {
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      }
    }
  }
}

module.exports = config
