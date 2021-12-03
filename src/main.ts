import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './styles/gloabl.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import naive from 'naive-ui'

const  app = createApp(App)

app.use(router)
app.use(store)
app.use(naive)

app.mount('#app')

