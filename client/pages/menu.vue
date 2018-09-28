<template>
    <div class="menuWrapper">
        <div class="title">{{ pageContent.displayTitle }}</div>
        <div class="items">
            <div v-for="(item, itemIndex) in pageContent.items" class="menuItem" :key="itemIndex">
                <!-- <img class="menuPic" v-if="item.img" src="http://placehold.it/100x100" /> -->
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

            menuContent.pages.forEach(page => {
                if (page.pageName === this.menuPage) {
                    this.pageContent = page
                }
            })
        }
    }
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
            margin-bottom: 20px;

            .menuPic {
                display: inline-block;
            }

            .itemDetails {
                display: inline-block;
                vertical-align: top;
                padding-top: 5px;

                .menuItemTitle {
                    font-size: 58px;
                    color: yellow;
                }

                .menuItemDescription {
                    font-size: 38px;
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
