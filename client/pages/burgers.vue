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
                        price: 7,
                    },
                    {
                        title: 'Cheeseburger',
                        price: 8,
                    },
                    {
                        title: 'Bacon Cheeseburger',
                        price: 9,
                    },
                    {
                        title: 'Mushroom Swiss Burger',
                        price: 9,
                    },
                    {
                        title: 'Western Barbecue Burger',
                        price: 9,
                        description: 'Served with grilled onions, bacon, cheese, and barbecue sauce',
                    },
                    {
                        title: 'Blue Cheese Burger',
                        price: 9,
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