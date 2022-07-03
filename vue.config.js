const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 写原生webpack的配置项
  configureWebpack: {
    devServer: {
      open: true,
      port: 8080,
      host: 'localhost'
    }
  }
})
