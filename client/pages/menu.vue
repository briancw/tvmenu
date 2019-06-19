<template>
    <div class="menuWrapper">
        <div class="title">{{ pageContent.displayTitle }}</div>
        <div class="pageDescription">{{ pageContent.description }}</div>
        <div class="items">
            <div v-for="(item, itemIndex) in pageContent.items" class="menuItem" :key="itemIndex">
                <!-- <img class="menuPic" v-if="item.img" src="http://placehold.it/100x100" /> -->
                <div class="itemDetails">
                    <div class="menuItemTitle" v-html="nl2br(item.title)" :style="{fontSize: pageContent.titleSize}"></div>
                    <div class="menuItemDescription" v-if="item.description" v-html="nl2br(item.description)" :style={fontSize: descriptionSize}"></div>
                    <div class="menuItemPrice" v-if="item.price" :style="{fontSize: priceSize}">${{ item.price.toFixed(2) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menupage',
    data() {
        return {
            menuPage: '',
            pageContent: {},
        }
    },
    mounted() {
        let currentPage = this.$route.path
        localStorage.setItem('previousPage', currentPage)

        this.menuPage = this.$route.params.menupage

        this.getMenuData()

        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 113) {
                localStorage.removeItem('previousPage')
                this.$router.push('/')
            }
            if (e.keyCode === 39 || e.keyCode === 78) { // right arrow or N
            }
        })
    },
    methods: {
        async getMenuData() {
            let res = await fetch('/menu.json')
            let menuContent = await res.json()

            menuContent.pages.forEach((page) => {
                if (page.pageName === this.menuPage) {
                    this.pageContent = page
                }
            })
        },
    },
}
</script>

<style lang="less">
@import '../styles/mixins.less';
@import '../styles/style-variables.less';

.menuWrapper {
    // display: flex;
    width: 100%;
    height: 100%;
    margin: 0px auto;
    padding-top: 15px;
    cursor: none;
    letter-spacing: 3px;
    word-spacing: 5px;

    .title {
        font-size: 100px;
        text-align: center;
        padding-top: 15px;
        color: @titleColor;
        text-shadow: @titleShadow;
        font-family: @titleFont;
    }

    .pageDescription {
        width: 90%;
        margin: 0px auto;
        text-align: center;
        font-size: 46px;
        padding: 10px 0px 0px;
        color: @textColor;
        text-shadow: @shadow;
        font-family: @textFont;
    }

    .items {
        padding-top: 65px;
        width: 90%;
        margin: 0px auto;

        .menuItem {
            clear: both;
            margin-bottom: 50px;

            .menuPic {
                display: inline-block;
            }

            .itemDetails {
                display: inline-block;
                vertical-align: top;
                padding-top: 5px;

                .menuItemTitle {
                    font-size: 48px;
                    color: @titleColor;
                    text-shadow: @shadow;
                    font-family: @titleFont;
                }

                .menuItemDescription {
                    font-size: 40px;
                    padding: 10px 10px;
                    color: @textColor;
                    text-shadow: @shadow;
                    font-family: @textFont;
                }

                .menuItemPrice {
                    font-size: 46px;
                    padding: 5px 10px 0px 10px;
                    color: @textColor;
                    text-shadow: @shadow;
                    font-family: @textFont;
                }
            }
        }
    }
}
</style>
