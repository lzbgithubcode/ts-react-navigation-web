// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssImport = require('postcss-import');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssPresetEnv = require('postcss-preset-env');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      browsers: 'last 2 versions',
      autoprefixer: {},
    }),
    postcssNested(),
  ],
};
