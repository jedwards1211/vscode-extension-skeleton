module.exports = function (api) {
  const plugins = ['@babel/plugin-proposal-class-properties']
  const presets = [
    [
      '@babel/preset-env',
      api.env('es5')
        ? { forceAllTransforms: true }
        : { targets: { node: '12' } },
    ],
    ['@babel/preset-typescript', { allowDeclareFields: true }],
  ]

  if (api.env('coverage')) {
    plugins.push('babel-plugin-istanbul')
  }

  return { plugins, presets }
}
