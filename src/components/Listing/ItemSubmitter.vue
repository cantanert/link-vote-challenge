<template>
    <div class="item-submitter-wrapper" @click="goToAddLink">
        <div class="plus-wrapper">
            <span class="plus">+</span>
        </div>
        <div class="submit-title-wrapper">
            <span>{{statics.buttons.submitLink}}</span>
        </div>
    </div>
</template>

<script>
    import statics from '../../statics/vote-link-statics';
    export default {
        data(){
            return{
                statics : statics
            }
        },
        name: "ItemSubmitter",
        methods: {
            goToAddLink: function () {
                this.$router.push('add')
            }
        }
    }
</script>

<style scoped lang="sass">
    $gray-container-background: #f7f7f7
    $gray-box-background: #ececec
    $pure-black: #000

    .item-submitter-wrapper
        display: flex
        width: 50%
        background-color: $gray-container-background
        padding: 10px
        margin-top: 25px
        border-radius: 3px
        border: 1px solid $gray-box-background
        cursor: pointer
        &:hover
            background-color: $gray-box-background
        .plus-wrapper
            background-color: $gray-box-background
            width: 100px
            height: 100px
            display: flex
            justify-content: center
            align-items: center
            font-size: 50px
            font-weight: 900
            border: 1px solid $pure-black
            border-radius: 5px
        .submit-title-wrapper
            display: flex
            align-self: center
            justify-content: center
            flex: 1
            font-weight: 900
            font-size: 30px

    @media screen and (max-width: 767px)
        .item-submitter-wrapper
            width: 100%
            .plus-wrapper
                width: 75px
                height: 75px
            .submit-title-wrapper
                font-size: 20px
</style>