<template>
    <div id="app">

        <time-line :events="timelineData.events" :current="currentTime" v-on:timeChanged="updateTime"
                   v-on:start="startTimeLine" v-on:stop="stopTimeline"></time-line>
        <div class="container-fluid modules">
            <div class="row">
                <module v-for="module in moduleData.modules" :transpiredEvents="transpiredEvents" :moduleData="module"></module>
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
                //spread operator so we don'taccidentallyy edit time line
                this.currentTime = {...newTime};
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
        },
        computed: {
            transpiredEvents: function () {
                let vm = this;
                return this.timelineData.events.filter((event) => {
                    if (event.time.year < vm.currentTime.year) return true;
                    return event.time.year === vm.currentTime.year && event.time.month <= vm.currentTime.month;
                });
            }
        }

    }
</script>

<style lang="scss">

    @import "./scss/_colours.scss";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }
    .modules{
        margin-top:100px;
    }

    html body {
        background-color: $back-light;
    }

    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: $module-accent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: darken($module-accent,10%);
    }

</style>
