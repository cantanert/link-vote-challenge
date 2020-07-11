<template>
    <ContentArea/>
</template>

<script>
    import ContentArea from "../components/Listing/ContentArea";
    export default {
        name: "Listing",
        components: {ContentArea},

        beforeCreate() {
            const loadedItems = localStorage.getItem('listedItems');
            if (loadedItems){
                this.$store.commit('loadFromLocalStorage',loadedItems);
            }
        }
    }
</script>

<style scoped lang="sass">

</style>