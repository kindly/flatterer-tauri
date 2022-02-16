var webpack = require('webpack');

module.exports = {
  transpileDependencies: ["vuetify"],
    configureWebpack: {
    node: {
      global: false
    },
    plugins: [
      new webpack.DefinePlugin({
        global: "window"
      })
    ]
  }
};
