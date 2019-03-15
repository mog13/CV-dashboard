<template>
    <div>
        <div class="blackout"></div>
        <div class="outro-container">
            <div><h1 class="title">Thank You</h1></div>
            <div><p class="explination">Hopefully you enjoyed my interactive CV. If you have any questions then please get in contact via the links provided.</p></div>
            <div><p class="explination">This project was created over a few days as a short term demonstration. Because of this there are several areas
                that are weaker than i would normally like. There are no tests. Normally i would use Jest and Protractor to keep a thorough test coverage (both unit and e2e). For an example please see my public github project <a target="_blank" href="https://github.com/mog13/Splain">Splain</a>.
            </p></div>

            <div><p class="explination">Although somewhat responsive this experience has been made with desktops in mind. I believe however in a real world situation a mobile offering would need to present an almost completely different user experience which would be outside the scope of this project</p></div>
            <a class="cvlink" href="https://mog13.github.io/CV-dashboard/public/resume.pdf" target="_blank"> see plain CV here</a>

            <div>
                <button type="button" class="btn btn-success" v-on:click="close()">close</button>
            </div>
            <div>
                <button type="button" class="btn btn-success" v-on:click="restart()">restart</button>
            </div>
           </div>
    </div>
</template>

<script>
    export default {
        name: "outro",
        methods: {
            close: function () {
                this.$emit('closeOutro')
            },
            restart: function () {
                this.$emit('restart')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/colours";

    h1 {
        color: $module-accent;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    p {
        color: $module-light;
        padding-left:5%;
        padding-right:5%;
    }

    .btn-success {
        background-color: $module-accent;
        margin-bottom: 20px;
    }
    a{
        color: $module-accent;
    }
    .cvlink {

        margin-bottom:20px;
    }

    .blackout {
        width: 100%;
        height: 100%;
        background-color: #090c15;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 100;
        opacity: 0.5;
    }

    .outro-container {
        position: fixed;
        width: 80%;
        height: 80%;
        top: 10%;
        background-color: #090c15;
        z-index: 900;
        left: 10%;
        border: 13px solid $module-accent;
        box-shadow: 5px 5px 17px 8px $module-dark;
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        padding-top: 5%;
        opacity: 1 !important;
    }
</style>