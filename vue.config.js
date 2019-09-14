module.exports = {
  configureWebpack: {
    module: {
      rules: []
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  }
}
