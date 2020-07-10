<template>
    <div class="item-lister">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
</template>

<script>
    import Item from "./Item";
    export default {
        name: "ItemLister",
        components: {Item}
    }
</script>

<style scoped lang="sass">
    .item-lister
        display: flex
        flex-direction: column

</style>