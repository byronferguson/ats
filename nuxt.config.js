module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'American Topsoil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'American Topsoil has served the Kansas City metro area for 20 years with quality topsoil, mulch and dirt.' },
      { hid: 'keywords', name: 'keywords', content: 'top soil, dirt, soil, sell, pulverized, cheap, fill dirt, company, Olathe, Overland Park, Belton, Raymore, Grandview, Leawood, Gardner, farm, garden, yard, construction, dump truck, load' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  plugins: ['~plugins/buefy'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
