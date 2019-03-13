<template>
    <div>
        <p> curent date: {{this.current}}</p>
        <button v-on:click="startTimeline()" :disabled="started">start</button>
        <button v-on:click="stopTimeline()" :disabled="!started">stop</button>
        <div class="blocks">
            <div class="block" @click="eventClicked(event)" v-for="event in events" :key="`${event.time.year}${event.time.month}`"> {{event.name}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TimeLine",
        props: ["events", "current"],
        data:()=>{
            return {
                started:false
            }
        },
        methods:{
            eventClicked:function(e){
                this.$emit('timeChanged',e.time)
            },
            startTimeline:function () {
                this.started = true;
                this.$emit('start')
            },
            stopTimeline:function () {
                this.started = false;
                this.$emit('stop')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blocks{
        display: flex;

        .block{
            background-color:blue;
            color:white;
            margin:5px;
        }
    }
</style>