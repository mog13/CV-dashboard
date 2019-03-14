<template>
    <div class="link-container">


    <div class="link" v-for="link in links" >
        <a class="title" v-if="link.href" target="_blank" :href="link.href">{{link.name}}</a>
        <h1 class="title" v-else>{{link.name}}</h1>
        <h2 class="content" v-if="link.content">{{link.content}}</h2>
    </div>
    </div>
</template>

<script>
    export default {
        name: "links",
        props:["links"]
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/colours";

    .link-container {
     padding-top:20px;
        .link {
            padding-bottom:20px;
            .title {
                font-size: 1.5rem;
                font-weight: bold;
                color: $module-accent;
            }
            .content {
                font-size: 1rem;
                color: $module-light;
            }
        }
    }
</style>