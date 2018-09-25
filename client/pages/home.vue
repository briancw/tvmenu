<template>
    <div id="pageWrapper">
        <router-link class="pageLink" v-if="menuContent.pages" v-for="page in menuContent.pages" :key="page.pageName" :to="`/menu/${page.pageName}`">
            {{ page.displayTitle }}
        </router-link>
    </div>
</template>

<script>
import tvmenu from '../components/menu.vue'

export default {
    name: 'home',
    components: {
        tvmenu,
    },
    data() {
        return {
            menuContent: {},
        }
    },
    mounted() {
        let previousPage = localStorage.getItem('previousPage')
        if (previousPage) {
            this.$router.push(previousPage)
        }
        this.getMenuData()
    },
    methods: {
        async getMenuData() {
            let res = await fetch('/menu.json')
            this.menuContent = await res.json()
        }
    }
}
</script>

<style lang="less">
@import '../styles/mixins.less';

.pageLink {
    color: #fff;
    font-size: 50px;
    margin-right: 15px;
}

</style>