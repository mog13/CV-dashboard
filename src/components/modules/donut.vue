<template>
    <div class="graphContainer">
        <div class="graphOuter">     </div>
            <donut-chart class="donut" id="donut" :data="proccesedData"  colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]' resize="true" ></donut-chart>

    </div>
</template>

<script>
    import {DonutChart } from 'vue-morris'

    export default {
        name: "donut",
        components: {
            DonutChart
        },
        props: ["donutData"],
        data: () => {
            return {}
        },
        computed: {
            proccesedData: function () {
                return this.donutData.map(data => {
                    return {label: `${data.time.year}.${data.time.month}`,
                        value: data.data.graphTest,
                        }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .graphContainer {
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .graphOuter {
            position:absolute;
            background-color: white;
            width: 90%;
            height: 90%;
        }
    }
</style>