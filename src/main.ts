import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
//createApp(App).mount('#app')
const app  = createApp(App)
app.use(createPinia())
app.use(PrimeVue,{
   theme:{
    preset: Aura,
    options: {
      darkModeSelector: '.dark-app', // Kelas untuk dark mode
    },
   }
})
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
