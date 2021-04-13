<template>
    <div class="container">
        <ul>
            <li><router-link to="#">List Item 1</router-link></li>
            <li><router-link to="#">List Item 2</router-link></li>
            <li><router-link to="#">List Item 3</router-link></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Header'
    }
</script>
<style scoped lang="scss">
    ul {
        border: 1px solid red;
    }
</style>
