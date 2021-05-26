export default {

  publicRuntimeConfig: {
    clientId: 'Iv1.f05a0dce5c26e79f',
    clientSecret: 'e12db86eb2a555f996cad2bf5380d69923f9d8da',
    appId: '116023',
    installationId: '17141426',
    privateKey: process.env.G_APP_PRIVATE_KEY, // TODO
    owner: 'nuxt-content-github',
    repo: 'nuxt-content-github.github.io',
    branch: 'markdown',
  },
  privateRuntimeConfig: {},
  /*
   ** Deployment target
   ** Doc: https://nuxtjs.org/guides/features/deployment-targets
   */
  target: "static",
  ssr: false,
  router: {
    //base: '/nuxt-content-github/', // TODO: Issue with @nuxt/auth redirect
  },
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/guides/features/rendering-modes
   */
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guides/configuration-glossary/configuration-modules
   */
  // buildModules: ['~/modules/content'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    //'@nuxtjs/auth-next'
  ],
  // content: {
  //   // Disable for security reason on CodeSandBox
  //   //liveEdit: false
  // },
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js Playground for nuxt/content",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  axios: {
    proxy: true,
    headers: {
      common: {
        'Access-Control-Allow-Origin': '*'
	  }
	}
  },

  // auth: { // ISSUE: https://github.com/nuxt-community/auth-module/issues/299
  //   strategies: {
  //     github: {
  //       clientId: 'Iv1.f05a0dce5c26e79f',
  //       clientSecret: 'e12db86eb2a555f996cad2bf5380d69923f9d8da'
  //     },
  //   },
  //   redirect: {
  //     home: '/',
  //     login: '/login',
  //     logout: '/logout',
  //     user: '/user',
  //     callback:'/callback/'
  //   }
  // },

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: []
};

