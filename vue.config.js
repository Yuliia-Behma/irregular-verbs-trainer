const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new (require('html-webpack-plugin'))({
        title: 'Iregular verbs trainer'
      })
    ]
  }
})
