import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import * as VueRouter from 'vue-router'
import routes from '@/route/index.js'

const app = createApp(App);

// 路由
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

// markdown样式

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach(block => {
        hljs.highlightBlock(block)
    })
})


app.use(router);


app.mount('#app')
