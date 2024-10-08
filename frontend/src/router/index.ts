import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        alias: '/home',
    },
    {
        path: '/notfound',
        name: 'notFound',
        component: NotFound
    },
    {
        path: '/:currentPath(.*)*',
        redirect: '/notfound',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;