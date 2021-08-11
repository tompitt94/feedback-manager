import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './../node_modules/bulma/css/bulma.css'

createApp(App).use(router).mount('#app')
