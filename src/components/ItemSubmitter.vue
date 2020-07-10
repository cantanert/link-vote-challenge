<template>
    <div class="item-submitter-wrapper">
        <div class="plus-wrapper">
            <span class="plus">+</span>
        </div>
        <div class="submit-title-wrapper">
            <span>SUBMIT A LINK</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemSubmitter"
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
</style>