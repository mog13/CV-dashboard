<template>
    <div id="app">

        <time-line :events="timelineData.events" :current="currentTime" v-on:timeChanged="updateTime"
                   v-on:start="startTimeLine" v-on:stop="stopTimeline"></time-line>
        <div class="container-fluid">
            <div class="row">
                <module v-for="module in moduleData.modules" :moduleData="module"></module>
            </div>
        </div>

    </div>
</template>

<script>

    import TimeLine from "./components/TimeLine";
    import timelineData from "./assets/events.json";
    import moduleData from "./assets/modules.json";
    import Module from "./components/module";

    export default {
        name: 'app',
        components: {
            Module,
            TimeLine
        }, data: () => {
            return {
                timelineData,
                moduleData,
                currentTime: {year: 1992, month: 1},
                tick: null,
                tickTime: 1000
            }
        },
        methods: {
            updateTime: function (newTime) {
                this.currentTime = newTime;
            },
            startTimeLine: function () {
                this.tick = setInterval(this.tickTimeline, this.tickTime)
            },
            stopTimeline: function () {
                if (this.tick) clearInterval(this.tick)
            },
            tickTimeline: function () {
                this.currentTime.month++;
                if (this.currentTime.month > 12) {
                    this.currentTime.month = 1;
                    this.currentTime.year++;
                }
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    html body{
        background-color: slategray;
    }

    *{
        box-sizing: border-box;
    }
</style>
