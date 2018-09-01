<template>
    <div class="menuWrapper">
        <div class="title">{{ menudata.title }}</div>
        <div class="items">
            <div v-for="(item, itemIndex) in menudata.items" class="menuItem" :key="itemIndex">
                <img class="menuPic" v-if="item.img" src="http://placehold.it/100x100" />
                <div class="itemDetails">
                    <div class="menuItemTitle" v-html="nl2br(item.title)"></div>
                    <div class="menuItemDescription" v-if="item.description">{{ item.description }}</div>
                    <div class="menuItemPrice" v-if="item.price">${{ item.price.toFixed(2) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu',
    props: ['menudata'],
    mounted() {
        let previousPage = this.$route.name
        localStorage.setItem('previousPage', previousPage)
    },
}
</script>

<style lang="less">
@import '../styles/mixins.less';

.menuWrapper {
    // display: flex;
    width: 100%;
    margin: 0px auto;
    padding-top: 20px;
    // font-family: 'Ubuntu';
    font-family: 'Baloo Tammudu';
    text-shadow: 4px 4px 0px #000;
    cursor: none;

    .title {
        font-size: 100px;
        text-align: center;
        padding-top: 10px;
        color: yellow;
    }

    .items {
        padding-top: 10px;
        width: 90%;
        margin: 0px auto;

        .menuItem {
            clear: both;
            margin-bottom: 30px;

            .menuPic {
                display: inline-block;
            }

            .itemDetails {
                display: inline-block;
                vertical-align: top;
                padding-top: 5px;

                .menuItemTitle {
                    font-size: 62px;
                    color: yellow;
                }

                .menuItemDescription {
                    font-size: 42px;
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
</style>