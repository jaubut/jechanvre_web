module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'jechanvre',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ceci est le pwa du site web de jechanvre.io' }
    ],
    script: [
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"}
    ],
    link: [
      { rel: 'stylesheet', href:'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'}
    ]
  },
  css: ['~assets/css/main.styl'],
  sitemap: {
    generate: true
  },
  manifest: {
    name: 'je chanvre',
    description: 'jechanvre. Participes au mouvement. En prévente, livraison mi-septembre. ',
    lang: 'fr',
    theme_color: '#FBDA34',
    ogTitle: 'je chanvre',
    ogDescription: 'jechanvre. Participes au mouvement. En prévente, livraison mi-septembre. '
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#FBDA34',
    height: '5px'
  },
  /*
  ** Build configuration
  */
  plugins: [],
  modules: [
    '@nuxtjs/optimize',
    '@nuxtjs/pwa',
    '@nuxtjs/icon',
    '@nuxtjs/manifest',
    '@nuxtjs/meta',
    '@nuxtjs/workbox',
    '@nuxtjs/font-awesome',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-analytics', { ua: 'UA-82844671-3' }],
    {
      src: '@rafamaciel/firebase',
      options: {
        apiKey: "AIzaSyCAbz2GveBbR6LtJNO_IsT7K0R2gvSnSkY",
        authDomain: "jechanvre.firebaseapp.com",
        databaseURL: "https://jechanvre.firebaseio.com",
        projectId: "jechanvre",
        storageBucket: "jechanvre.appspot.com",
        messagingSenderId: "863040406365"
      }
    }
  ],
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.node = { fs: 'empty' };
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: []
  }
}
