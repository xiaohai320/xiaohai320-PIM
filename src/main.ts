import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
    ElInput,
    ElButton,
    ElMenu,
    ElContainer,
    ElMain,
    ElAside,
    ElDescriptions,
    ElDescriptionsItem,
    ElAvatar
} from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/reset.css'
const app = createApp(App)
app.use(ElInput)
app.use(ElButton)
app.use(ElMenu)
app.use(ElContainer)
app.use(ElMain)
app.use(ElAside)
app.use(router)
app.use(ElDescriptions,ElDescriptionsItem)
app.use(ElAvatar)
app.mount('#app')
