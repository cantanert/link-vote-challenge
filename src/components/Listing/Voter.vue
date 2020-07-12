<template>
    <div class="voter-wrapper">
        <div class="up-votter-wrapper">
            <button @click="upVoteHandler(item.id)"><b-icon-arrow-up-short/>{{statics.buttons.upVote}}</button>
        </div>
        <div class="down-voter-wrapper">
            <button @click="downVoteHandler(item.id)" v-show="item.point > 0"><b-icon-arrow-down-short />{{statics.buttons.downVote}}</button>
        </div>
    </div>
</template>

<script>
    import statics from '../../statics/vote-link-statics';

    export default {
        name: "Voter",
        data(){
            return{
                statics : statics
            }
        },
        props: ['item'],
        methods:{
            upVoteHandler(itemId){
                this.$store.dispatch('upVoter', itemId)
            },
            downVoteHandler(itemId){
                this.$store.dispatch('downVoter', itemId)
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
                padding: 0
                font-size: 15px
                svg
                    font-size: 20px
    @media screen and (max-width: 767px)
        .voter-wrapper
            justify-content: space-between
            .up-votter-wrapper, .down-voter-wrapper
                flex: unset
                button
                    font-size: 16px
                    padding: 0
                    svg
                        font-size : 1rem


</style>