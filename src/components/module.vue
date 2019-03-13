<template>
    <div class="module-container" :class="[colStyle]">
        <div class="module">
            <h1 v-if="moduleData.type === 'text'"> {{latestEventWithData.name}} </h1>
            <h1 v-else> im a module {{this.moduleData.name}}</h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: "module",
        props: ["moduleData", "transpiredEvents"],
        computed: {
            colStyle: function () {
                return `col-12 col-lg-${this.moduleData.width} `
            },
            latestEvent: function () {
                if(this.transpiredEvents.length ===0) return {};
                return this.transpiredEvents.reduce((prev,current)=>{
                    if(!prev || current.time.year > prev.time.year) return current;
                    if (current.time.year === prev.time.year && current.time.month >= prev.time.month) return current;
                    return prev;
                })
            },
            latestEventWithData: function () {
                if(this.transpiredEvents.length ===0 || !this.moduleData.watches) return {};
                return this.transpiredEvents.reduce((prev,current)=>{
                    let hasMatchingData = false;
                    this.moduleData.watches.forEach(watch=>{
                       if(current.data && current.data[watch]) hasMatchingData = true;
                    });
                    if(!hasMatchingData) return prev;
                    if(!prev || current.time.year > prev.time.year) return current;
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