<template>
    <div class="wrapper default">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'default-layout',
}
</script>

<style lang="less">
@import '../styles/style-variables.less';

.wrapper {
    background-color: @backgroundColor;
    width: 100%;
    height: 100%;
}
</style>
