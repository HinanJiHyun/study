import Vue from "vue";
import VueRouter from "vue-router";
import createListView from "@/views/CreateListView"

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
            // component: () => import("../views/NewsView.vue"),
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            // component: () => import("../views/AskView.vue"),
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: () => import("../views/JobsView.vue"),
            component: createListView('JobsView'),
        },
        {
            path: '/item/:id',
            component: () => import("../views/ItemView.vue"),
        },
        {
            path: '/user/:name',
            component: () => import("../views/UserView.vue"),
        },
    ]
})