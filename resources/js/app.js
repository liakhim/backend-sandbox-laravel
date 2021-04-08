import Sandbox from "./pages/Sandbox";

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
            component: Sandbox
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: r => r(App)
});
