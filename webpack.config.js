const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production', // Switch to 'development' for local testing
  entry: {
    main: './src/index.js', // JavaScript entry point
    styles: './src/tailwind.css', // Tailwind CSS entry point
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into a separate file
          'css-loader', // Processes @import and url() in CSS
          'postcss-loader', // Processes Tailwind and other PostCSS plugins
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpiles JavaScript
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // Outputs styles.css
    }),
  ],
  resolve: {
    extensions: ['.js', '.css'],
  },
  devtool: 'source-map',
};
