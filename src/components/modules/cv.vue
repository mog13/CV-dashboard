<template>
    <div class="cv-container">
        <div class="event" v-for="event in cvEvents">
        <h1 class="title"> {{event.data.cv.header}}</h1>
            <p class="entry" v-for="text in event.data.cv.text">{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cv",
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

    .title{
        font-size: 1.5rem;
        font-weight:bold;
        text-decoration: underline;
        color:$module-accent;
    }

    .entry {
        color:lighten($module-accent,50%)
    }
}
</style>