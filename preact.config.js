/**
 * Function that mutates the original webpack config.
 * Supports asynchronous changes when a promise is returned (or it's an async function).
 * You can find more info here: https://github.com/preactjs/preact-cli#webpack
 *
 * @param {import('preact-cli').Config} config - original webpack config
 * @param {import('preact-cli').Env} env - current environment and options pass to the CLI
 * @param {import('preact-cli').Helpers} helpers - object with useful helpers for working with the webpack config
 */
export default (config, env, helpers) => {
	if (!env.isProd) {
    // Let Webpack infer the protocol & host but insist we don't want a port
    config.devServer.client.webSocketURL = 'auto://0.0.0.0/ws'
  }
};
