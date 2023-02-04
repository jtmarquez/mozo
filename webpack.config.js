// webpack.config.js
const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  context: __dirname,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: (!slsw.lib.webpack.isLocal
    ? "source-map"
    : false),
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.pug'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.paths.json',
      }),
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  optimization: {
    minimize: false,
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.ts?$/,
        exclude: [/node_modules/, /\.serverless/, /\.webpack/],
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
};
