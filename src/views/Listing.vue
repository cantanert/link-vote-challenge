<template>
    <ContentArea/>
</template>

<script>
    import ContentArea from "../components/Listing/ContentArea";
    import enums from '../statics/enums'
    export default {
        name: "Listing",
        components: {ContentArea},
        beforeCreate() {
            const loadedItems = JSON.parse(localStorage.getItem(enums.localStorageName));
            if (loadedItems){
                this.$store.commit(enums.mutations.loadFromLocalStorage,loadedItems);
            }
        }
    }
</script>

<style scoped lang="sass">

</style>