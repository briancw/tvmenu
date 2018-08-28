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
                title: 'Fair Favorites',
                items: [
                    {
                        title: 'Fresh Giant Kurly Fries',
                        price: 8,
                        description: 'Made fresh to order, our Giant Kurly Fries are served piled high in a five pound tray',
                    },
                    {
                        title: 'Hand Dipped Corn Dog',
                        price: 5,
                    },
                    {
                        title: 'Hand Dipped Jumbo Corn Dog',
                        price: 7,
                    },
                    {
                        title: 'Hand Dipped Jalapeño Cheddar Corn Dog',
                        price: 6,
                        description: `Made from a Taylor's Sausage Hot Dog loaded with Jalapeños and Cheddar cheese`,
                    },
                    {
                        title: 'Jumbo Hot Dog',
                        price: 5,
                        description: 'A Jumbo quarter pound hot dog served on an outdoor roll',
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