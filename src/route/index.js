import * as VueRouter from 'vue-router'
import Home from '@/pages/Home.vue';
import Article from '@/pages/Article.vue';
import A1 from '@/pages/articles/1.vue';
import A2 from '@/pages/articles/2.vue';
import A3 from '@/pages/articles/3.vue';
import A4 from '@/pages/articles/4.vue';
import A0 from '@/pages/articles/0.vue';

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
                path: '0',
                component: A0,
            },
            {
                path: '1',
                component: A1,
            },
            {
                path: '2',
                component: A2,
            },
            {
                path: '3',
                component: A3,
            },
            {
                path: '4',
                component: A4,
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