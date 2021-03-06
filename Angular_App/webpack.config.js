const AotPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require('copy-webpack-plugin');

// const ContainerReferencePlugin = require("webpack/lib/container/ContainerReferencePlugin");
// const ContainerPlugin = require("webpack/lib/container/ContainerPlugin");

const shellConfig = {
  entry: ["./projects/shell/src/polyfills.ts", "./projects/shell/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/shell"),
    port: 5000
  },  
  module: {
    rules: [
      { test: /\.ts$/, loader: "@ngtools/webpack" }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "var", name: "shell" },
      filename: "remoteEntry.js",
      remotes: {
        mfe1: "mfe1" 
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/shell/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/shell/src/app/app.module#AppModule"
      )
    }),
    new CopyPlugin([
      { from: 'projects/shell/src/assets', to: 'assets' },
    ]),    
    new HtmlWebpackPlugin({
      template: "./projects/shell/src/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:5000/",
    filename: "[id].[name].js",
    path: __dirname + "/dist/shell",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "production"
};

const mfe1Config = {
  entry: ["./projects/mfe1/src/polyfills.ts", "./projects/mfe1/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/mfe1"),
    port: 3000
  },  
  module: {
    rules: [
      { test: /\.ts$/, loader: "@ngtools/webpack" }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      library: { type: "var", name: "mfe1" },
      filename: "remoteEntry.js",
      exposes: {
        Component: './projects/mfe1/src/app/app.component.ts',
        Module: './projects/mfe1/src/app/flights/flights.module.ts'
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/mfe1/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/mfe1/src/app/app.module#AppModule"
      )
    }),
    new CopyPlugin([
      { from: 'projects/mfe1/src/assets', to: 'assets' },
    ]),    
    new HtmlWebpackPlugin({
      template: "./projects/mfe1/src/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:3000/",
    filename: "[name].js",
    path: __dirname + "/dist/mfe1",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "production"
};

module.exports = [shellConfig, mfe1Config];
