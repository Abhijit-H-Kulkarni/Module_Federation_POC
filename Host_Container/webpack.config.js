const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
  },
  output: {
    publicPath: "http://localhost:8080/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Host_Container",
      filename: "remoteEntry.js",
      remotes: {
        app3: "app3@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        "react": {
          requiredVersion: "^16.13.0",
          singleton: true,
          strictVersion: true,
        },
        "react-dom": {
          requiredVersion: "^16.13.0",
          singleton: true,
          strictVersion: true,
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
