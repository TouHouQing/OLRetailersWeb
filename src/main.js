import { createApp } from 'vue'
import { lazyPlugin } from '@/directives'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

