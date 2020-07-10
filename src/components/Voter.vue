<template>
    <div class="voter-wrapper">
        <div class="up-votter-wrapper">
            <button><b-icon-arrow-up-short/>Up vote</button></div>
        <div class="down-voter-wrapper">
            <button><b-icon-arrow-down-short/>Down vote</button>
        </div>
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
                display: flex
                align-items: center
                border: none
                background-color: unset
                color: $dark-gray
                font-weight: 600
                svg
                    font-size: 2rem

</style>