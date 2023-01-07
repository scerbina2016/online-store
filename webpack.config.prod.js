const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  devServer: {
    //contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/components/images'),
    },
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ 
    title: "GS_1C",
    template: './src/index.html',
    scriptLoading: "blocking"}),
    new CopyPlugin({
      patterns: [
        { from: './src/components/images', to: './images' },
        { from: './src/style.css', to: './' },
      ],
    }),
  
  ],


    
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ,".css"]
  },
};
