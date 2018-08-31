<template>
    <div id="pageWrapper">
        <tvmenu v-bind:menudata="menudata"></tvmenu>
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
            menudata: {
                title: 'Hamburgers',
                items: [
                    {
                        title: 'Hamburger',
                        price: 6.5,
                    },
                    {
                        title: 'Cheeseburger',
                        price: 7,
                    },
                    {
                        title: 'Bacon Cheeseburger',
                        price: 8,
                    },
                    {
                        title: 'Mushroom Swiss Burger',
                        price: 8,
                    },
                    {
                        title: 'Western Barbecue Burger',
                        price: 8,
                        description: 'Served with grilled onions, bacon, cheese, and barbecue sauce',
                    },
                ],
            },
        }
    },
}
</script>

<style lang="less">
@import '../styles/mixins.less';

</style>