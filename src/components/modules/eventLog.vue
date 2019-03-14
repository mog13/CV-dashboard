<template>
    <div class="log-container">
        <div class="log">
            <div class="entry-container" v-for="entry in entries">
                <div class="entry header"> {{entry.name}} <span class="date"> - {{dateToString(entry.time)}}</span></div>
                <div class="entry" v-for="log in entry.data.logs">{{log}} </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "eventLog",
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
                    text-decoration: underline;

                    .date{
                        font-weight: normal;
                        font-size: 0.8rem;
                    }
                }
            }
            &:nth-child(odd){
                background-color: darken($module-light,2%);
            }

        }

    }
</style>