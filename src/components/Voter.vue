<template>
    <div class="voter-wrapper">
        <div class="up-votter-wrapper"><button>Up vote</button></div>
        <div class="down-voter-wrapper"><button>Donw vote</button></div>
    </div>
</template>

<script>
    export default {
        name: "Voter"
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
                border: none
                background-color: unset
                color: $dark-gray
                font-weight: 600
</style>