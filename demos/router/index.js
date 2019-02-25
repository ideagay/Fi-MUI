import Vue from 'vue';
import VueRouter from 'vue-router';
import docsMap from './docsMap.json';

Vue.use(VueRouter);

var dealMap = function (map) {
    let routes = [];
    map.forEach(el => {
        if (el.path) {
            let route = {
                path: el.path,
                name: el.name
            }
            if (el.name) {
                route.component = () => import(`@/docs/${el.name}.md`);
            }
            route.children = el.children ? dealMap(el.children) : [];
            routes.push(route);
        }
    });
    return routes;
}

let docsRoutes = dealMap(docsMap);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/docs/installation'
        },
        {
            path: '/docs',
            name: 'docs',
            component: () => import('components/docs.vue'),
            children: [...docsRoutes]
        }
        
    ]
});

export default router;
