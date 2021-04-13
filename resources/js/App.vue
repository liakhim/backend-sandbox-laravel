<template>
  <div id="app">
        <component :is="layout">
            {{$route}}
            <router-view></router-view>
        </component>
  </div>
</template>
<script>
    import MainLayout from './layouts/MainLayout.vue'
    import AdminLayout from './layouts/AdminLayout.vue';
    export default {
        computed: {
            layout() {
                return (this.$route.meta.layout || 'main') + '-layout'
            }
        },
        methods: {
            // foo here
        },
        components: {
            MainLayout, AdminLayout
        }
    }

</script>
