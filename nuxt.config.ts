export default defineNuxtConfig({
  // Depending on whether you want to use SSR
  ssr: false,

  devtools: { enabled: true },

  devServer: {
    port: 3004, // Or any other port you prefer
  },

  plugins: ['~/plugins/fontawesome.js'],

  app: {
    baseURL: '/',
    head: {
      title: 'Feliz aniversario',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Descrição da sua página' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' } // Aqui é onde você define o favicon
      ]
    }
  },

  compatibilityDate: '2024-09-03',
});