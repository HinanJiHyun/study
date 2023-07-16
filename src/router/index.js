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
            component: () => import("../views/NewsView.vue"),
        },
        {
            path: '/jobs',
            component: () => import("../views/JobsView.vue"),
        },
        {
            path: '/ask',
            component: () => import("../views/AskView.vue"),
        },
        {
            path: '/item',
            component: () => import("../views/ItemView.vue"),
        },
        {
            path: '/user',
            component: () => import("../views/UserView.vue"),
        },
    ]
})