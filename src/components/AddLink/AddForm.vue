<template>
    <div class="add-form-wrapper">
        <div class="add-form">
            <p  class="return-link" @click="backToList"><b-icon icon="arrow-left-short"/>Return to List</p>
            <h2 class="form-title">Add New Link</h2>
            <div class="form-inputs">
                <p class="link-name-title">Link Name:</p>
                <input v-model="message" placeholder="e.g Alphabet">
                <p class="link-url-title">Link URL:</p>
                <input v-model="message" placeholder="e.g http.//abc.xyz">
                <div class="add-button-wrapper">
                    <button>ADD</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddForm",
        methods:{
            backToList(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped lang="sass">
    .add-form-wrapper
        display: flex
        justify-content: center
        .add-form
            font-weight: 700
            cursor: pointer
            width: 50%
            justify-content: flex-start
            .return-link
                margin-top: 25px
                display: flex
                svg
                    vertical-align: bottom
                    font-size: 25px
            .form-title
                display: flex
                justify-self: flex-start
                margin: 40px 0
                font-weight: 900
            .form-inputs
                display: flex
                flex-direction: column
                p
                    display: flex
                    margin-bottom: 0
                input, .add-button-wrapper button
                    height: 50px
                    padding: 5px
                    margin-bottom: 25px
                .add-button-wrapper
                    display: flex
                    justify-content: flex-end
                    button
                        width: 25%
                        margin-top: 5px
                        background-color: #000
                        color: #fff
                        border-radius: 25px
                        font-weight: 900
                .link-url-title
            .form-inputs

    @media screen and (max-width: 767px)
        .add-form-wrapper
            .add-form
                width: 100%
</style>