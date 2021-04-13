<template>
    <div>
        <Header/>
        <router-view/>
    </div>
</template>
<script>
    import Header from "../components/Global/TheHeader.vue";
    export default {
        name: 'MainLayout',
        components: { Header }
    }
</script>
