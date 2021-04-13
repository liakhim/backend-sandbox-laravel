<template>
    <div id="header" class="d-flex">
        <div class="logo">
            <img src="../../../assets/AIM.svg" alt="">
        </div>
        <ul class="d-flex align-items-center p-0 m-0">
            <li class="d-flex align-items-center justify-content-center"><router-link to="#">List Item 1</router-link></li>
            <li class="d-flex align-items-center"><router-link to="#">List Item 2</router-link></li>
            <li class="d-flex align-items-center"><router-link to="#">List Item 3</router-link></li>
            <li class="d-flex align-items-center"><router-link to="admin">to admin</router-link></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Header'
    }
</script>
<style scoped lang="scss">
    #header {
        .logo {
            width: 180px;
            padding: 10px;
            border: 1px solid #cccccc;
            img {
                width: 100%;
            }
        }
        ul {
            li {
                width: 180px;
                height: 100%;
                border: 1px solid #cccccc;
            }
        }
    }
</style>
