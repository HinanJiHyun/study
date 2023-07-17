import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: () => import("../views/NewsView.vue"),
            meta: { transition: 'slide-left' },
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: () => import("../views/JobsView.vue"),
            meta: { transition: 'slide-left' },
        },
        {
            path: '/ask',
            name: 'ask',
            component: () => import("../views/AskView.vue"),
            meta: { transition: 'slide-left' },
        },
        {
            path: '/item/:id',
            component: () => import("../views/ItemView.vue"),
            meta: { transition: 'slide-left' },
        },
        {
            path: '/user/:name',
            component: () => import("../views/UserView.vue"),
            meta: { transition: 'slide-left' },
        },
    ]
})