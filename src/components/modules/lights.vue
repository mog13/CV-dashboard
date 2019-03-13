<template>
    <div class="lightContainer">
        <div v-for="val in dynamicVals">
            <h1 class="light" :class="{ lit: val.lit }">{{val.name}}</h1>
        </div>
    </div>
</template>

<script>
    //     {name:"A levels",target:{label:"ALEVEL",param:"qualification"}}]
    export default {
        name: "lights",
        props:["data","vals"],
        computed:{
            dynamicVals:function() {
                let vm = this;
                return this.vals.map(val=> {
                    return {name:val.name,
                        lit:vm.shouldbeLit(val.target)}
                })
            }
        },
        methods:{
            shouldbeLit: function (target) {
                return this.data.filter(event=>{
                 return event.data[target.param] && event.data[target.param] === target.label;
                }).length >0;
            }
        }

    }
</script>

<style lang="scss" scoped>
    .lightContainer {
        display:flex;
        flex-direction: column;

        .light{
            opacity: 0.2;
            &.lit{
                opacity: 1;
            }
        }
    }
</style>