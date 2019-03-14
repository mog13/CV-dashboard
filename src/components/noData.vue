<template>
    <h1 :class="{ 'light':light}"> No Data</h1>
</template>

<script>
    export default {
        name: "noData",
        props:["light"]
    }
</script>

<style lang="scss" scoped>
    @import "../scss/colours";
    h1{
        color:$module-dark;
        opacity:0.5;
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%) rotate(-45deg);
        font-weight: bold;

        &.light {
            color:$module-light;
        }
    }
</style>