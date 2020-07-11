<template>
    <div class="item-lister">
        <Item v-for="(item,index) in listedItems" :item='item' :key="index"/>
        <p v-show="isListEmpty">There in no item exist.</p>
    </div>
</template>

<script>
    import Item from "./Item";
    import {mapGetters} from 'vuex';

    export default {
        data(){
            return {
            }
        },
        name: "ItemLister",
        components: {Item},
        computed: {

            ...mapGetters({
                listedItems: 'listedItemsGetter',
                isListEmpty:'isEmpty'
            })
        },
    }
</script>

<style scoped lang="sass">
    .item-lister
        display: flex
        flex-direction: column
        p
            margin-top: 20px
            font-size: 20px

</style>