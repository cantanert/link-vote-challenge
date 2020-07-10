<template>
    <div class="content-area">
        <ItemSubmitter/>
    </div>
</template>

<script>
    import ItemSubmitter from "./ItemSubmitter";
    export default {
        name: "ContentArea",
        components: {ItemSubmitter}
    }
</script>

<style scoped lang="sass">
    .content-area
        display: flex
        flex-direction: column
        align-self: center
</style>