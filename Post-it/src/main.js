import './assets/main.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import VueAwesomePaginate from 'vue-awesome-paginate'
import 'vue-awesome-paginate/dist/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)

app.use(VueAwesomePaginate).mount('#app')
