const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    const tsconfigPathsPlugin = new TsconfigPathsPlugin({});
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: config.resolve.plugins
          ? [...config.resolve.plugins, tsconfigPathsPlugin]
          : [tsconfigPathsPlugin],
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
