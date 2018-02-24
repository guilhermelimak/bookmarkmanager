const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js')

module.exports = (storybookBaseConfig, configType) => {
  const config = genDefaultConfig(storybookBaseConfig, configType)

  config.resolve.extensions.push(
    '.ts',
    '.tsx',
    '.vue',
    '.css',
    '.less',
    '.scss',
    '.sass',
    '.html'
  )

  config.resolve.alias = {
    vue$: 'vue/dist/vue.esm.js',
    '@': '../src'
  }

  config.module.rules.push({
    test: /\.(tsx|ts)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        loader: 'ts-loader'
      }
    ]
  })

  return config
}
