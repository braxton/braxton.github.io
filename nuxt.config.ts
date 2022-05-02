import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: [
      "@/assets/css/styles.css",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome"
    ]
  },
  css: [
    "@/assets/css/styles.css",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  target: "static"
})
