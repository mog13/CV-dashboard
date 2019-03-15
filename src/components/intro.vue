<template>
    <div>
        <div class="blackout"></div>
    <div class="intro-container">
        <div><h1 class="title">Welcome</h1></div>
        <div><p class="explanation">This app will take you through key events of my life monitoring skill, qualifications and achievements.</p></div>
        <div><p class="explanation">It was created over a few days to be a practical demonstration and hopefully a novel and interesting experience. Unfortunatly </p></div>
        <div><p class="explanation">Once you've clicked start the timeline will automatically move and slow down for important dates. You can skip to specific events using the timeline at the top.</p></div>
        <div><p class="explanation">All data is as accurate as possible (some months etc may be off). There are some spelling mistakes, in a production situation these would be caught by QA!</p></div>
        <div><p class="explanation">It is written in Vue and is open source. MorrisJS is used for any graphing. I hope you enjoy :)</p></div>
        <div><button type="button" class="btn btn-success" v-on:click="close()">Start</button></div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "intro",
        methods: {
            close:function() {
                this.$emit('closeIntro')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/colours";
    .title{
        color:$module-accent;
        font-weight:bold;
        margin-bottom: 2rem;
    }

    .explanation{
        color:$module-light;
        padding-left:5%;
        padding-right:5%;
    }

    .btn-success{
        background-color: $module-accent;
    }

    .blackout{
        width: 100%;
        height:100%;
        background-color: #090c15;
        top:0;
        left: 0;
        position: fixed;
        z-index: 100;
        opacity: 0.5;
    }
    .intro-container{
        position: fixed;
        width: 80%;
        height: 80%;
        top: 10%;
        background-color: #090c15;
        z-index: 900;
        left: 10%;
        border: 13px solid $module-accent;
        box-shadow: 5px 5px 17px 8px $module-dark;
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        padding-top:5%;
        opacity:1!important;
    }
</style>