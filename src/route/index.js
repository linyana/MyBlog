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


export default routes;