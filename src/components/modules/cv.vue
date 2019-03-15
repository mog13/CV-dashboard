<template>
    <div class="cv-container">
        <transition-group name="fade">
        <div class="event" v-for="event in cvEvents" :key="event.key">
        <h1 class="title"> {{event.data.cv.header}}</h1>
            <p class="entry" v-for="text in event.data.cv.text" :key="text">{{text}}</p>
        </div>
        </transition-group>
        <no-data v-if="cvEvents.length ===0" :light="true"></no-data>
    </div>
</template>

<script>
    import NoData from "../noData";
    export default {
        name: "cv",
        components: {NoData},
        props:["events"],
        computed:{
            cvEvents:function () {
                return this.events.filter(e=>{
                    return e.data.cv;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/colours";

.cv-container{
    text-align: start;
    padding-left: 20px;
    padding-top: 10px;
    max-height:400px;
    min-height: 400px;
    overflow-y: scroll;
    .title{
        font-size: 1.2rem;
        font-weight:bold;
        text-decoration: underline;
        color:$module-accent;
    }

    .entry {
        color:lighten($module-accent,50%);
        font-size: 0.8rem;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
}
</style>