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
                title: 'Ice Cold Drinks',
                items: [
                    {
                        title: `Pepsi, Diet Pepsi,
                        Dr. Pepper, Sierra Mist, Mt. Dew, Root Beer,
                        Lemonade, Strawberry Lemonade`,
                    },
                    {
                        title: 'Small',
                        price: 3,
                    },
                    {
                        title: 'Medium',
                        price: 4,
                    },
                    {
                        title: 'Large',
                        price: 5,
                    },
                    {
                        title: 'Special Refill Cup',
                        description: 'Half Price Refills',
                        price: 6,
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
