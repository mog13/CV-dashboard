<template>
    <div class="graphContainer">
        <div class="graphOuter">     </div>
            <donut-chart class="donut" id="donut" :data="proccesedData" :colors="colours" resize="true" ></donut-chart>
            <no-data v-if="proccesedData.length ===0"></no-data>
    </div>
</template>

<script>
    import {DonutChart } from 'vue-morris'
    import NoData from "../noData";

    export default {
        name: "donut",
        components: {
            NoData,
            DonutChart
        },
        props: ["donutData"],
        data: () => {
            return {
                colours:["#6da049","#3aa056","#75a060"]
            }
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
    @import "../../scss/_colours.scss";
    .graphContainer {
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .graphOuter {
            position:absolute;
            background-color: $module-light;
            width: 90%;
            height: 90%;
        }
    }
</style>