<template>
    <div class="order-by-filter-wrapper">
        <b-form-select v-model="selected" :options="options" @change="orderByHandler"/>
    </div>
</template>

<script>
    import voteLinkStatics from '../../statics/vote-link-statics'

    export default {
        name: "OrderByFilter",
        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: voteLinkStatics.texts.orderBy, disabled: true },
                    { value: voteLinkStatics.orderEnums.MOST, text: voteLinkStatics.texts.mostVoted},
                    { value: voteLinkStatics.orderEnums.LESS, text: voteLinkStatics.texts.lessVoted}
                ]
            }
        },
        methods:{
            orderByHandler(val){
                this.$store.dispatch('orderByParam',val);
            }
        }
    }
</script>

<style scoped lang="sass">
    .order-by-filter-wrapper
        width: 50%
    @media screen and (max-width: 767px)
        .order-by-filter-wrapper
            width: 100%
</style>