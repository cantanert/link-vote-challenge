<template>
    <p  class="return-link " @click="backToList">
        <b-icon icon="arrow-left-short"/>{{text}}
    </p>
</template>

<script>
    export default {
        name: "ReturnLink",
        props: ['text','url'],
        methods: {
            backToList(){
                this.$router.push(this.$props.url)
            }
        }
    }
</script>

<style scoped lang="sass">
    .return-link
        cursor: pointer
        margin-top: 25px
        display: flex
        svg
            vertical-align: bottom
            font-size: 25px

</style>