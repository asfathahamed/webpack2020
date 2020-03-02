const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    filename: "bundle.[contenthash].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
      {
        test: /\.(tsx|ts)/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.hbs/,
        use: ["handlebars-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello World",
      template: "index.hbs"
    })
  ]
};
