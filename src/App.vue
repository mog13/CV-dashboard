<template>
    <div id="app">

        <time-line :events="timelineData.events" :current="currentTime" v-on:timeChanged="updateTime"
                   v-on:start="startTimeLine" v-on:stop="stopTimeline" :started="started"></time-line>
        <div class="container-fluid modules">
            <div class="row">
                <module v-for="module in moduleData.modules" :transpiredEvents="transpiredEvents"
                        :moduleData="module"></module>
            </div>
        </div>
        <intro v-on:closeIntro="closeIntro" v-if="show.intro"></intro>
        <outro v-on:closeOutro="closeOutro" v-on:restart="restart" v-if="show.outro"></outro>
    </div>
</template>

<script>

    import TimeLine from "./components/TimeLine";
    import timelineData from "./assets/events.json";
    import moduleData from "./assets/modules.json";
    import Module from "./components/module";
    import Intro from "./components/intro";
    import Outro from "./components/outro";

    export default {
        name: 'app',
        components: {
            Outro,
            Intro,
            Module,
            TimeLine
        }, data: () => {
            return {
                timelineData,
                moduleData,
                currentTime: {year: 1992, month: 1},
                tick: null,
                tickTime: 200,
                show: {
                    intro: true,
                    outro: false
                },
                started:false
            }
        },
        methods: {
            closeIntro: function () {
                this.show.intro = false;
                this.startTimeLine();
            },
            closeOutro: function () {
                this.show.outro = false;
            },
            restart: function() {
                this.closeOutro();
                this.currentTime.year =1992;
                this.currentTime.month=1;
            },
            updateTime: function (newTime) {
                //spread operator so we don't accidentallyy edit time line
                this.currentTime = {...newTime};
            },
            startTimeLine: function () {
                this.started= true;
                this.tick = setTimeout(this.tickTimeline, this.getNextTickTime())
            },
            stopTimeline: function () {
                this.started= false;
                if (this.tick) clearInterval(this.tick)
            },
            tickTimeline: function () {
                this.currentTime.month++;
                if (this.currentTime.month > 12) {
                    this.currentTime.month = 1;
                    this.currentTime.year++;
                }
                if(this.currentTime.year< 2030) {
                    this.tick = setTimeout(this.tickTimeline, this.getNextTickTime());
                }
                else{
                    this.started= false;
                    this.show.outro = true;
                }
            },

            getNextTickTime: function () {
                let vm = this;
                let next = this.timelineData.events.filter(e => {
                    return e.time.year === vm.currentTime.year && e.time.month === vm.currentTime.month;
                });
                if (next.length > 0) {
                    this.tickTime = 200;
                    return 2000;
                }
                if (this.tickTime > 20) this.tickTime -= 10;
                return this.tickTime;
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
        },
        created: function () {
            this.timelineData.events.forEach(e => {
                e.key = `${e.time.year}${e.time.month}`;
            });
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

    .modules {
        margin-top: 100px;
    }

    html body {
        background-color: $back-light;
        overflow-x: hidden;
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
        background: darken($module-accent, 10%);
    }

</style>
