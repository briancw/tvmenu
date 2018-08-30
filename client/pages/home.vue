<template>
    <div id="pageWrapper">
        <router-link class="homeLink" to="/main">Main Menu Items</router-link>
        <router-link class="homeLink" to="/burgers">Burgers</router-link>
        <router-link class="homeLink" to="/drinks">Drinks</router-link>
    </div>
</template>

<script>
import tvmenu from '../components/menu.vue'

export default {
    name: 'home',
    components: {
        tvmenu,
    },
}
</script>

<style lang="less">
@import '../styles/mixins.less';

.homeLink {
    color: #fff;
    font-size: 50px;
}

</style>