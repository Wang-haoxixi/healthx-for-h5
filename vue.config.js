/*
 * @Description: 配置相关
 * @Author: xxx
 * @Date: 2022-06-06 15:33:34
 * @LastEditors: xxx
 * @LastEditTime: 2022-06-14 10:06:51
 */

const path = require('path');
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /**
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   **/
  chainWebpack: (config) => {
  },
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: { // 简写
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components'),
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";` // 引入全局样式
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    // requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    // hotOnly: false,
    proxy: { // string | Object  // 设置代理
      "/api": {
        /* 目标代理服务器地址 */
        // target: 'http://www.xxx.cn/vue_admin_api/', // api服务器地址
        target: 'https://api-dev.shall-buy.top/', // api服务器地址
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //规定请求地址以什么作为开头
        }
      },
    },
    // overlay: { // 全屏模式下是否显示脚本错误
    //   warnings: true,
    //   errors: true
    // },
    // before: app => {
    // }

  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {}
}