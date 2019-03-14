<template>
    <div class="cv-container">
        <div class="event" v-for="event in cvEvents">
        <h1> {{event.data.cv.header}}</h1>
            <p v-for="text in event.data.cv.text">{{text}}</p>
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

<style scoped>

</style>