<template>
    <div class="log-container">
        <div class="log">
            <div  v-for="entry in entries">
                <h1>{{entry.name}}</h1>
                <p v-for="log in entry.data.logs">{{log}}</p>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "eventLog",
        props:["entries"]
    }
</script>

<style lang="scss" scoped>
    .log-container{
        height:400px;
        display: flex;
        justify-content: center; /* center items vertically, in this case */
        align-items: center;     /* center items horizontally, in this case */
    }
    .log{
        height:80%;
        width: 80%;
        background-color:white;
    }
</style>