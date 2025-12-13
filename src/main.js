import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Estilos globales
import './assets/styles/main.css'

const app = createApp(App)

// Estado global (Pinia)
app.use(createPinia())

// Sistema de rutas
app.use(router)

// Montaje de la app
app.mount('#app')
