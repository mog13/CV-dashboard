<template>
    <div class="link-container">


    <div v-for="link in links" >
        <h1>{{link.name}}</h1>
        <a target="_blank" :href="'http://'+link.content">{{link.content}}</a>
    </div>
    </div>
</template>

<script>
    export default {
        name: "links",
        props:["links"]
    }
</script>

<style scoped>

</style>