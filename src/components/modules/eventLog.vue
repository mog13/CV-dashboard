<template>
    <div class="log-container">
        <div class="log">
            <transition-group name="slide-fade" style="width: 100%">
            <div class="entry-container" v-for="entry in entries" :key="entry">
                <div class="entry header"> <span class="name">{{entry.name}}</span> <span class="date"> - {{dateToString(entry.time)}}</span></div>
                <div class="entry" v-for="log in entry.data.logs" :key="log">{{log}} </div>
            </div>
            </transition-group>
        </div>
    <no-data v-if="entries.length ===0"></no-data>

    </div>
</template>

<script>
    import NoData from "../noData";
    export default {
        name: "eventLog",
        components: {NoData},
        props:["entries"],
        methods:{
            dateToString(time){
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                return(`${monthNames[time.month-1]} ${time.year}` );
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../scss/_colours.scss";
    .log-container{
        height:400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .log{
        height:90%;
        width: 90%;
        background-color: $module-light;
        box-shadow: inset 0px 0px 2px 1px rgba(99,99,99,1);
        padding:2px;
            display:flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        .entry-container{
            text-align: start;
            width:100%;
            .entry{
                font-size: 1rem;
                align-self: flex-start;
                padding-left:30px;
                width:100%;
                &.header{
                    padding-left:10px;
                    font-weight: bold;

                    .date{
                        font-weight: normal;
                        font-size: 0.8rem;
                    }

                    .name{
                        text-decoration: underline;
                    }
                }
            }
            &:nth-child(odd){
                background-color: darken($module-light,2%);
            }

        }
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>