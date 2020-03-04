const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    'hello-world': './src/routes/hello-world.ts',
    'honey': './src/routes/honey.ts',
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    filename: "[name].bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    index: "index.html",
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world', 'vendors~hello-world~honey'],
      title: "Hello World",
      template: "page-template.hbs"
    }),
    new HtmlWebpackPlugin({
      filename: 'honey.html',
      chunks: ['honey', 'vendors~hello-world~honey'],
      title: "Honey",
      template: "page-template.hbs"
    })
  ]
};
