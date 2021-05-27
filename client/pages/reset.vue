<template>
    <div id="pageWrapper">
        Reset
    </div>
</template>

<script>

export default {
    name: 'reset',
    mounted() {
        localStorage.clear()
        setTimeout(() => {
            this.$router.push('/')
        }, 5000)
    },
}
</script>

<style lang="less">
@import '../styles/mixins.less';

.pageLink {
    color: #FFC0CB;
    font-size: 50px;
    margin-right: 15px;
}

</style>
