module.exports = {
    plugins: [
        require('postcss-bem'),
        require('cssnano')({
            preset: 'default',
          }),
      require('postcss-nested'),
      require('autoprefixer')
    ]
  }