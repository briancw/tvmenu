<template>
    <div class="wrapper default">
        <!-- <div class="title">Southern Oregon Food &amp; Beverage</div> -->
        <div id="menuWrapper">
            <div v-for="(column, columnIndex) in columns" class="menuColumn" :key="columnIndex">
                <div class="columnTitle">{{ column.title }}</div>
                <div v-for="(item, itemIndex) in column.items" class="menuItem" :key="itemIndex">
                    <img class="menuPic" v-if="item.img" src="http://placehold.it/100x100" />
                    <div class="itemDetails">
                        <div class="menuItemTitle" v-html="nl2br(item.title)"></div>
                        <div class="menuItemDescription" v-if="item.description">{{ item.description }}</div>
                        <div class="menuItemPrice" v-if="item.price">${{ item.price.toFixed(2) }}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <error></error>
        <router-view></router-view>
    </div>
</template>

<script>
import error from '../components/error.vue'

export default {
    components: {
        error,
    },
    data() {
        return {
            columns: [
                {
                    title: 'Hot Food',
                    items: [
                        {
                            title: 'Fresh Giant Kurly Fries',
                            price: 8,
                            img: '',
                        },
                        {
                            title: 'Corn Dog',
                            price: 5,
                            img: '',
                        },
                        {
                            title: 'Jumbo Corn Dog',
                            price: 7,
                            img: '',
                        },
                        {
                            title: 'Jalapeño Cheddar Corn Dog',
                            price: 6,
                            img: '',
                        },
                        {
                            title: 'Hot Dog',
                            price: 5,
                        },
                    ],
                },
                {
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
                        },
                        {
                            title: 'Blue Cheese Burger',
                            price: 9,
                        },
                    ],
                },
                {
                    title: 'Ice Cold Drinks',
                    items: [
                        {
                            title: `Pepsi
                            Diet Pepsi
                            Dr. Pepper
                            Sierra Mist
                            Mt. Dew
                            Root Beer
                            Lemonade
                            Strawberry Lemonade`,
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
                            description: 'Half Price Refils',
                            price: 6,
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style lang="less">
.wrapper {
    // background-color: #054278
    background-color: #002f58;
    // background-color: #fff;
    color: #fff;
    
    width: 1920px;
    height: 1080px;
    
    // .title {
    //     color: #fff;
    //     text-align: center;
    //     font-size: 72px;
    //     padding: 15px 0px;
    // }

    #menuWrapper {
        display: flex;
        width: 100%;
        // border: 1px solid #000;
        margin: 0px auto;
        padding-top: 20px;
        font-family: 'Ubuntu';

        .menuColumn {
            // display: inline-block;
            padding: 0px 10px;
            vertical-align: top;
            flex: 1;

            .columnTitle {
                font-size: 80px;
                text-align: center;
                padding-bottom: 15px;
            }

            .menuItem {
                clear: both;
                margin-bottom: 20px;

                .menuPic {
                    display: inline-block;
                }

                .itemDetails {
                    display: inline-block;
                    vertical-align: top;
                    padding-top: 5px;

                    .menuItemTitle {
                        font-size: 48px;
                    }

                    .menuItemDescription {
                        font-size: 32px;
                        padding: 10px 10px;
                    }

                    .menuItemPrice {
                        font-size: 40px;
                        padding: 5px 10px 0px 10px;
                    }
                }
            }
        }
    }
}
</style>