// This file helps in fast reloading the app when the code changes. It is used by the Metro bundler to build the app. It is a configuration file that tells the bundler how to build the app. It is a JavaScript file that exports an object. The object contains the configuration options for the bundler

 
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);


