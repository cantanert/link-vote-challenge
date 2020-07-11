<template>
    <div class="item-lister">
        <Item  v-for="(item,index) in listedItems" :item='item' :key="index"/>
    </div>
</template>

<script>
    import Item from "./Item";
    import { mapGetters } from 'vuex'

    export default {
        name: "ItemLister",
        components: {Item},
        computed: {
            ...mapGetters("LinkVotesModule",{
                listedItems: "listedItemsGetter"
            })
        },
    }
</script>

<style scoped lang="sass">
    .item-lister
        display: flex
        flex-direction: column

</style>