const platforms = [
  {
    os: 'OS X',
    osVersion: 'Ventura',
    browserName: 'chrome',
    browserVersion: 'latest',
  },
  {
    os: 'OS X',
    osVersion: 'Ventura',
    browserName: 'firefox',
    browserVersion: 'latest',
  },
  {
    os: 'OS X',
    osVersion: 'Ventura',
    browserName: 'edge',
    browserVersion: 'latest',
  },
];

module.exports = {
    auth: {
      username: process.env.BROWSERSTACK_USERNAME,
      access_key: process.env.BROWSERSTACK_ACCESS_KEY
    },
    run_settings: {
      framework: "playwright",
      framework_config_file: "playwright.config.js",
      project_name: "Yirifi Project",
      build_name: "Yirifi-CI-Build-Birat",
      test_observability: true,
    },
    platforms,
  };
  