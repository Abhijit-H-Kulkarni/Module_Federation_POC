const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "http://localhost:3002/",
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
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "remoteEntry.js",
      exposes: {
        "./Button2": "./src/Button2",
      },
      shared: {
        // "react": {
        //   requiredVersion: "^16.13.0",
        //   singleton: true,
        //   strictVersion: true,
        // },
        "my-react": {
        import: "react",
        shareKey: "shared-react",
        shareScope: "default",
        singleton: true,
        strictVersion: true,
        version: "16.8.6",
        requiredVersion: "^16.13.0"
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
