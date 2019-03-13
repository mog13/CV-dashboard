<template>
    <div class="module-container" :class="[colStyle]">
        <div class="module">
            <h1> im a module {{this.moduleData.name}}</h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: "module",
        props:["moduleData"],
        computed: {
            colStyle: function () {
                return `col-12 col-lg-${this.moduleData.width} `
            }
        }
    }
</script>

<style lang="scss" scoped>
    .module-container{

        .module{
            background-color: slateblue;
            margin:10px;
        }

    }
</style>