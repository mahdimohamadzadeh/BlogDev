module.exports = {
  configureWebpack: {
    plugins: [require("unplugin-vue-components/webpack")({})],
  },
  lintOnSave: false,
};
