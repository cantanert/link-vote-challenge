<template>
    <div class="header-wrapper">
        <div class="logo-wrapper">
            <img src="../assets/hepsiburadaLogo.png" alt="" class="logo">
        </div>
        <div class="title-wrapper">
            <p class="title">
                <span class="link">Link</span>
                <span class="vote">VOTE</span>
                {{mappedSampleState}}
            </p>
        </div>
        <router-link to="/add">go to add</router-link>
        <router-link to="/">go to listing</router-link>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Header",
        computed: {
            ...mapGetters('LinkVotesModule',{
                mappedSampleState: 'sampleStateGetter'
            })
        }
    }
</script>

<style scoped lang="sass">
    .header-wrapper
        display: flex
        border-bottom: 1px solid #000
        font-size: 23px
        .logo-wrapper
            flex: 1
            .logo
                width: 100%
                padding-bottom: 10px
        .title-wrapper
            flex: 3
            display: flex
            justify-content: flex-end
            align-self: flex-end
            font-weight: 500
            .link
                font-weight: 900
            .vote
                font-weight: 200

</style>