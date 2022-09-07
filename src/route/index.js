import * as VueRouter from 'vue-router'
import Home from '@/pages/Home.vue';
import Article from '@/pages/Article.vue';
import A1 from '@/pages/articles/1.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/article',
        component: Article,
        children: [
            {
                path: '1',
                component: A1,
            }
        ]
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})



export default router;