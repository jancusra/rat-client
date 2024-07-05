const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const devMode = process.env.NODE_ENV !== "production";
const paths = {
  dist: path.join(__dirname, 'dist/'),
  src: path.join(__dirname, 'src/')
};

module.exports = {
  entry: path.join(paths.src, 'index.js'),
  performance: {
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|ico)$/i,
        type: 'asset/resource'
      }
    ],
  },
  resolve: {
    alias: {
      ratRoot: path.join(paths.src, ''),
      ratAdmin: path.join(paths.src, 'admin'),
      ratComponents: path.join(paths.src, 'components'),
      ratContexts: path.join(paths.src, 'contexts'),
      ratImages: path.join(paths.src, 'images'),
      ratPlugins: path.join(paths.src, 'plugins'),
      ratSections: path.join(paths.src, 'sections'),
      ratStyles: path.join(paths.src, 'css'),
      ratWeb: path.join(paths.src, 'web'),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".svg", ".png"]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  output: {
    path: paths.dist,
    filename: '[name].[contenthash].js',
    clean: true
  },
  devServer: {
    static: paths.dist,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
      favicon: path.join(paths.src, 'favicon.ico')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
};
