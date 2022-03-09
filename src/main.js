import { createApp } from 'vue'
// bootstrap樣式
import 'bootstrap-icons/font/bootstrap-icons.css'

// #region import axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// #endregion

// #region 固定最後import
// App.vue的物件
import App from './App.vue'
// 路由import
import router from './router'
// #endregion 固定最後import

const app = createApp(App)
app.use(router)
// 使用 axios套件
app.use(VueAxios, axios)
app.mount('#app')
