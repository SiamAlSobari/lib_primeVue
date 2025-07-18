import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
//createApp(App).mount('#app')
const app  = createApp(App)
app.use(PrimeVue,{
   theme:{
    preset: Aura
   }
})
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
