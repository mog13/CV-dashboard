<template>
    <div class="timeline">
        <!--<button v-on:click="startTimeline()" :disabled="started">start</button>-->
        <!--<button v-on:click="stopTimeline()" :disabled="!started">stop</button>-->
        <div class="blocks">
            <div class="block" :class="{ lit: hasTranspired(event)}"
                 @click="eventClicked(event)" v-for="event in events"
                 :key="`${event.time.year}${event.time.month}`">
                <i class="icon fas " :class="[event.icon? event.icon:'fa-question-circle']"></i>
            </div>
        </div>
        <div class="time-container">
            <div class="time-panel">
                <h2>{{this.getMonthDisplay(this.current.month)}} {{this.current.year}}</h2>
                <h3 class="event" v-if="currentEvents.length >0">({{currentEvents[0].name}})</h3>
                <h3 class="event" v-else>-</h3>
            </div>
            <div class="controls" @click="toggleTimeline()">
                <!--<button v-on:click="startTimeline()" :disabled="started">start</button>-->
                <i class="icon fas"  :class="[started? 'fa-pause':'fa-play']"></i>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TimeLine",
        props: ["events", "current","started"],
        data: () => {
            return {
            }
        },
        methods: {
            eventClicked: function (e) {
                this.$emit('timeChanged', e.time)
            },
            toggleTimeline:function(){
              this.started = !this.started;
              this.$emit(this.started?'start':'stop')
            },
            getMonthDisplay: function (month) {
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                return(monthNames[month-1]);
            },
            hasTranspired: function (event) {
                if (event.time.year < this.current.year) return true;
                return event.time.year === this.current.year && event.time.month <= this.current.month;
            }
        },
        computed:{
            currentEvents:function() {
                let vm = this;
                return this.events.filter(e=>{
                    return e.time.year === vm.current.year && e.time.month === vm.current.month;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/colours";

    .timeline {

        position: fixed;
        width:100%;
        overflow-x: hidden;
        z-index: 5;
        top:0;
        .blocks {
            background-color: $back-dark;
            display: flex;
            width: 100%;
            overflow-x: scroll;
            &::-webkit-scrollbar {
                width: 10px;
                display:none;
            }

            .block {
                background-color: $module-accent;
                transform: skew(-50deg);
                margin: 5px;
                flex: 1;
                position: relative;
                transition: all 0.5s ease;
                opacity:0.4;
                min-width:40px;
                &.lit{
                    opacity: 1;
                }
                .icon {
                    transform: skew(50deg);
                    color: lighten($back-dark, 10%);
                }

            }
        }
        .time-container {
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            .time-panel {
                background-color: $back-dark;
                min-width: 50%;
                h2{
                    color:$module-accent;
                    font-weight: bold;
                    text-transform: uppercase;
                    padding-bottom:0;
                    margin-bottom: 0;
                }
                .event{
                    color:$module-accent;
                    font-weight: bold;
                    font-size: 0.8rem;
                }
            }
            .controls {
                .icon{
                    margin-top: -5px;
                    color:$module-accent;
                }
                background-color:$back-dark;
                padding-left:10px;
                padding-right:10px;
                border-radius: 5%;
            }
        }

    }


</style>