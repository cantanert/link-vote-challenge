<template>
    <div class="voter-wrapper">
        <div class="up-votter-wrapper">
            <button @click="upVoteHandler(item.id)"><b-icon-arrow-up-short/>Up vote</button></div>
        <div class="down-voter-wrapper">
            <button v-show="item.point > 0" @click="downVoteHandler(item.id)"><b-icon-arrow-down-short/>Down vote</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Voter",
        props: ['item'],
        methods:{
            upVoteHandler(itemId){
                this.$store.commit('upVoter', itemId)
            },
            downVoteHandler(itemId){
                this.$store.commit('downVoter', itemId)
            }
        }
    }
</script>

<style scoped lang="sass">
    $dark-gray: #828282

    .voter-wrapper
        display: flex
        flex-direction: row
        width: 100%
        .up-votter-wrapper, .down-voter-wrapper
            display: flex
            flex: 1
            button
                display: flex
                align-items: center
                border: none
                background-color: unset
                color: $dark-gray
                font-weight: 600
                svg
                    font-size: 2rem

</style>