const pkg = require('./package')

module.exports = {
  server: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3000
  },
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    title: 'CodeBits | Web & Software development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
    ]
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   { src: '~plugins/ga.js', ssr: false }
  // ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/svg'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: true
  },
  googleFonts: {
    families: {
      'Titillium Web': [200, 400],
      Amaranth: false
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
