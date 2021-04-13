import Sandbox from "./pages/Sandbox";
import AdminMain from "./pages/AdminMain";
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

window.Vue = require('vue')

Vue.use(VueRouter);

// Setup the router
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/sandbox',
            component: Sandbox,
            meta: {
                layout: 'main'
            },
        },
        {
            path: '/admin',
            component: AdminMain,
            meta: {
                layout: 'admin'
            },
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: r => r(App)
});
