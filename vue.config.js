const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'User Management Dashboard', // <---- this is PWA name
  }
})
