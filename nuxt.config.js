export default {
  /*
   ** Deployment target
   ** Doc: https://nuxtjs.org/guides/features/deployment-targets
   */
  target: "static",
  router: {
    base: '/nuxt-content-github/',
  },
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/guides/features/rendering-modes
   */
  mode: "universal",
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
  modules: ["@nuxt/content"],
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

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: []
};

