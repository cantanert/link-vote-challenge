<template>
    <div class="toast-added">
        <div :key="item" v-for="item of items" class="toast-item">
            <span>{{item}}</span> {{actionTitle}}.
        </div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props:['items', 'actionTitle']
    }
</script>

<style scoped lang="sass">
    $light-green: #dcf9d3
    $dark-green: #5cae5c

    .toast-added
        display: flex
        justify-content: center
        z-index: 1
        div
            position: fixed
            top: 50px
            display: flex
            align-items: center
            justify-content: center
            height: 50px
            width: 50%
            background-color: $light-green
            color: green
            border: 1px solid $dark-green
            border-radius: 5px
            font-weight: 100
            -webkit-box-shadow: 0 0 10px 0 rgba(148,142,148,1)
            -moz-box-shadow: 0 0 10px 0 rgba(148,142,148,1)
            box-shadow: 0 0 10px 0 rgba(148,142,148,1)
            span
                font-weight: 900
                text-transform: uppercase
                margin-right: 5px

</style>