// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 3,
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    baseURL: '/stacks/nuxt/',
    head: {
      title: 'Reginald Alfret V | Open-Source Contributor · AI & DS Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Open-Source Contributor, AI & Data Science Engineer, and Software Developer with 30 merged PRs across Apple, Google, Microsoft, Meta, AWS, NVIDIA, NASA, Netflix and more.' },
        { name: 'theme-color', content: '#050505' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          innerHTML: `if (window.self !== window.top) { document.documentElement.classList.add('is-embedded'); }`
        }
      ],
      style: [
        {
          innerHTML: `html.is-embedded .floating-stack-dock, .is-embedded .floating-stack-dock { display: none !important; }`
        }
      ]
    }
  }
})
