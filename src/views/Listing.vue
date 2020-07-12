<template>
    <ContentArea/>
</template>

<script>
    import ContentArea from "../components/Listing/ContentArea";
    import statics from '../statics/vote-link-statics'
    export default {
        name: "Listing",
        components: {ContentArea},
        beforeCreate() {
            const loadedItems = JSON.parse(localStorage.getItem(statics.localStorageName));
            if (loadedItems){
                this.$store.commit('loadFromLocalStorage',loadedItems);
            }
        }
    }
</script>

<style scoped lang="sass">

</style>