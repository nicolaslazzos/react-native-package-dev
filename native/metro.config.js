const path = require('path');

const pages = '/../web/pages';
const components = '/../web/common/components';

const extraNodeModules = {
  '@common/pages': path.resolve(__dirname + pages),
  '@common/components': path.resolve(__dirname + components),
};

const watchFolders = [
  path.resolve(__dirname + pages),
  path.resolve(__dirname + components),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from web/ to local node_modules
        name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};
