<template>
    <div class="module-container" :class="[colStyle]">
        <div class="module">
            <h1 class="title">{{moduleData.name}}</h1>
            <event-log v-if="moduleData.type === 'log'" :entries="transpiredEvents"></event-log>
            <graph v-else-if="moduleData.type === 'graph'" :graphData="transpiredEvents"></graph>
            <donut v-else-if="moduleData.type === 'donut'" :donutData="transpiredEvents"></donut>
            <lights v-else-if="moduleData.type ==='lights'" :data="transpiredEvents" :vals="lightTargets"></lights>
            <links v-else-if="moduleData.type === 'links'" :links="moduleData.data.links"></links>
            <cv v-else-if="moduleData.type === 'cv'" :events="transpiredEvents"></cv>
            <h1 v-else> im a module {{this.moduleData.name}}</h1>
        </div>

    </div>
</template>

<script>
    import EventLog from "./modules/eventLog";
    import Graph from "./modules/graph";
    import Donut from "./modules/donut";
    import Lights from "./modules/lights";
    import Links from "./modules/links";
    import Cv from "./modules/cv";

    export default {
        name: "module",
        components: {Cv, Links, Lights, Donut, Graph, EventLog},
        props: ["moduleData", "transpiredEvents"],
        data:()=>{
            return {
                lightTargets:[{name:"GCSE'S",target:{label:"GCSE",param:"qualification"}},
                    {name:"A levels",target:{label:"ALEVEL",param:"qualification"}}]
            }
        },
        computed: {
            colStyle: function () {
                return `col-12 col-lg-${this.moduleData.width} `
            },
            latestEvent: function () {
                if (this.transpiredEvents.length === 0) return {};
                return this.transpiredEvents.reduce((prev, current) => {
                    if (!prev || current.time.year > prev.time.year) return current;
                    if (current.time.year === prev.time.year && current.time.month >= prev.time.month) return current;
                    return prev;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../scss/_colours.scss";
    .module-container {

        .module {
            position:relative;
            background-color: $module-dark;
            margin: 10px;
            box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.25);
            .title{
                color:$module-dark;
                font-weight: bold;
                left:0.4rem;
                text-align: start;
                padding-left:10px;
                padding-top:5px;
                padding-bottom:5px;
                font-size: 1rem;
                margin:0;
                top:0.2rem;
                text-transform: uppercase;
                text-decoration: underline;
                background-color: $module-accent;
            }

        }

    }
</style>