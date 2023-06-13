const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [postcssJitProps(OpenProps), postcssPresetEnv({ stage: 1 })],
};
