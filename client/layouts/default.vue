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
.wrapper {
    // background-color: #054278;
    // background-color: #002f58;
    background-color: #000;
    color: #fff;

    // width: 1920px;
    // height: 1080px;

    // width: 1080px;
    // height: 1920px;
    width: 100%;
    height: 100%;

}
</style>
