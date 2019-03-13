<template>
    <div class="module-container" :class="[colStyle]">
        <div class="module">
            <h1 v-if="moduleData.type === 'text'"> {{(latestEvent.name||"N/A")}} </h1>
            <event-log v-else-if="moduleData.type === 'log'" :entries="transpiredEvents"></event-log>
            <graph v-else-if="moduleData.type === 'graph'" :graphData="transpiredEvents"></graph>
            <donut v-else-if="moduleData.type === 'donut'" :donutData="transpiredEvents"></donut>
            <lights v-else-if="moduleData.type ==='lights'" :data="transpiredEvents" :vals="lightTargets"></lights>
            <h1 v-else> im a module {{this.moduleData.name}}</h1>
        </div>

    </div>
</template>

<script>
    import EventLog from "./modules/eventLog";
    import Graph from "./modules/graph";
    import Donut from "./modules/donut";
    import Lights from "./modules/lights";

    export default {
        name: "module",
        components: {Lights, Donut, Graph, EventLog},
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
    .module-container {

        .module {
            background-color: slateblue;
            margin: 10px;
        }

    }
</style>