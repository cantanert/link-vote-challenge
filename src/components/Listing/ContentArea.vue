<template>
    <div class="content-area">
        <ItemSubmitter/>
        <ItemListerWrapper/>
    </div>
</template>

<script>
    import ItemSubmitter from "./ItemSubmitter";
    import ItemListerWrapper from "./ItemListerWrapper";
    export default {
        name: "ContentArea",
        components: {ItemListerWrapper, ItemSubmitter}
    }
</script>

<style scoped lang="sass">
    .content-area
        display: flex
        flex-direction: column
        align-items: center
</style>