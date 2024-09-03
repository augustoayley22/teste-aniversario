export default defineNuxtConfig({
  ssr: false, // Depending on whether you want to use SSR
  devtools: { enabled: true },
  devServer: {
    port: 3004, // Or any other port you prefer
  },
  plugins: ['~/plugins/fontawesome.js'],
  app: {
    baseURL: '/', // Ensure paths are set correctly for the web
  },
});
