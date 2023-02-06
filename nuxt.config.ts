export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       apiKey: 'AIzaSyDqCUpTgKFGyxM6iBhcmZ-d4lYkz5Fi_kk',
    //       authDomain: 'eosky-a9938.firebaseapp.com',
    //       projectId: 'eosky-a9938',
    //       storageBucket: 'eosky-a9938.appspot.com',
    //       messagingSenderId: '985559979249',
    //       appId: '1:985559979249:web:093aac808f590e7c600550'
    //     },
    //   }
    // ]
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  plugins: [
    // '@/plugins/firebase'
  ]
  
})
