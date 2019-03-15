<template>
    <div class="graphContainer">
        <div class="graphOuter">     </div>
            <donut-chart class="donut" id="donut" :data="proccesedData" :formatter="addMonths" :colors="colours" :resize="true" ></donut-chart>
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
        methods:{
            addMonths:function(y){return y + " Months" }
        },
        computed: {
            proccesedData: function () {
                return this.donutData.filter(d=>{return d.data.experience !== undefined }).map(data => {
                    return {label: data.data.experience.name,
                        value: data.data.experience.months,
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
        width:100%;
        .graphOuter {
            position: absolute;
            background-color: $module-light;
            width: 90%;
            height: 90%;

        }
    }
    .donut {
        width: 100%;
        overflow: hidden;
    }
</style>