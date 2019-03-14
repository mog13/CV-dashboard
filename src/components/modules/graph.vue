<template>
    <div class="graphContainer">
        <div class="graphSize">
            <line-chart class="graph" id="line" :data="proccesedData"  :xkey="'date'" :ykeys="['test','test2']" resize="true"></line-chart>
        </div>
    </div>
</template>

<script>
    import {LineChart} from 'vue-morris'

    export default {
        name: "graph",
        components: {
            LineChart
        },
        props: ["graphData"],
        data: () => {
            return {}
        },
        computed: {
            proccesedData: function () {
                return this.graphData.map(data => {
                    return {date: `${data.time.year}.${data.time.month}`,
                        test: data.data.graphTest,
                    test2:data.data.test2}
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../scss/_colours.scss";
    .graphContainer {
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        .graphSize {
            background-color: $module-light;

        }
    }
</style>