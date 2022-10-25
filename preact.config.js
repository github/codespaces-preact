export default (config, env, helpers, options) => {
  if (!env.isProd) {
    // Let Webpack infer the protocol & host but insist we don't want a port
    config.devServer.client.webSocketURL = 'auto://0.0.0.0/ws'
  }
};
