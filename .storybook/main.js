const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (baseConfig) => {
    // scss を読み込む
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[local]___[hash:base64:2]',
            },
          },
        },
        'sass-loader',
      ],
    })
    baseConfig.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ]
    return { ...baseConfig }
  },
}
