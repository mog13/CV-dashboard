<template>
    <div class="graphContainer">
        <div class="graphSize">
            <line-chart class="graph" id="line" :data="proccesedData" :hoverCallback="genLegend" :xkey="'year'" :labels="skills" :ykeys="skills" :resize="true"></line-chart>
        </div>
        <no-data v-if="proccesedData.length ===0"></no-data>
    </div>
</template>

<script>
    import {LineChart} from 'vue-morris'
    import NoData from "../noData";

    export default {
        name: "graph",
        components: {
            NoData,
            LineChart
        },
        props: ["graphData"],
        data: () => {
            return {
                skills:['js','csharp','ts','java','c'],
                labels:["JS","C#","TS","Java","C++"]
            }
        },
        computed: {
            proccesedData: function () {
                let vm = this;
                return this.graphData.filter(d=>{
                    let graphable = false;
                    vm.skills.forEach(skill=>{
                        if(d.data[skill]) graphable = true;
                    })
                    return graphable;
                }).map(data => {
                    let dataPoint ={year: data.time.year,
                    month:data.time.month};
                    this.skills.forEach(skill=>{
                        if(data.data[skill]) dataPoint[skill] = data.data[skill];
                    });
                        return dataPoint

                })
            }
        },
        methods:{
            genLegend:function(index, options, content, row){

                let newContent = `<div class='morris-hover-row-label'>${row.month}/${row.year}</div>`;
                this.skills.forEach((skill,i)=>{
                    newContent+=this.createEntry(row,skill,this.labels[i],options.lineColors[i]);
                });
                return newContent
            },
            createEntry:function (row, param, label,col) {
                let amount = row[param];
                if(!amount) return "";
                let level = "beginner";
                if(amount > 3) level = "amateur";
                if(amount > 6) level = "novice";
                if(amount > 8) level = "intermediate";
                if(amount > 10) level = "strong";
                if(amount > 13) level = "advanced";
                if(amount >= 15) level = "expert";


               return `<div class='morris-hover-point' style="color:${col}; font-weight: bold">${label}: ${level}</div>`
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
            width:100%;
        }
    }
</style>