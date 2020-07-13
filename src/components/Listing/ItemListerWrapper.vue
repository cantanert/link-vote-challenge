<template>
    <div class="item-lister-wrapper">
        <OrderByFilter/>
        <ItemLister/>
    </div>
</template>

<script>
    import OrderByFilter from "./OrderByFilter";
    import ItemLister from "./ItemLister";
    export default {
        name: "ItemListerWrapper",
        components: {ItemLister, OrderByFilter}
    }
</script>

<style scoped lang="sass">
    $gray-box-background: #ececec

    .item-lister-wrapper
        width: 50%
        margin-top: 25px
        padding: 15px 0
        border-top: 3px solid $gray-box-background

    @media screen and (max-width: 767px)
        .item-lister-wrapper
            width: 100%
            padding: 15px 10px
</style>