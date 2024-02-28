/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1708331950189_9666';

  // add your middleware config here
  config.middleware = [];

  // CSRF enable false
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // ejs
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
  };
  config.static = {
    // 配置静态资源前缀 一般情况不修改
    // prefix: '/assets',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
