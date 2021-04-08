import Vue from 'vue'
import VueRouter from 'vue-router'
import Sandbox from './pages/Sandbox.vue'
Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'sandbox',
            component: Sandbox
        }
    ]
})

export default router
