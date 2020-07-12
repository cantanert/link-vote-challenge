<template>
    <div class="add-form-wrapper">
        <div class="add-form">
            <Toast :visibility="isSuccess" :text="addedItemsTitle" :action="'added'"/>
            <p  class="return-link " @click="backToList"><b-icon icon="arrow-left-short"/>Return to List</p>
            <h2 class="form-title">Add New Link</h2>
            <div class="form-inputs">
                <p class="link-name-title" >Link Name:</p>
                <input  v-model="title" placeholder="e.g Alphabet">
                <p class="link-url-title">Link URL:</p>
                <input  v-model="url" placeholder="e.g http.//abc.xyz">
                <div class="add-button-wrapper">
                    <button @click="addEventHandler">ADD</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Toast from "../Toast";
    export default {
        components: {Toast},
        data(){
          return{
              title: '',
              url: '',
              addedItemsTitle:'',
              isSuccess: false
          }
        },
        name: "AddForm",
        methods:{
            backToList(){
                this.$router.push('/')
            },
            addEventHandler(){
                // if(this.validateInputs()){
                    this.$store.commit('itemAdder',{
                        title: this.title,
                        url: this.url
                    });
                    this.addedItemsTitle = this.title;
                    this.clearInputs();
                    this.isSuccess = true;
                    setTimeout(()=>{
                        this.isSuccess = false
                    },2000)
                // }
            },
            /*validateInputs(){

            },*/
            clearInputs(){
                this.title = '';
                this.url = '';
            }
        }
    }
</script>

<style scoped lang="sass">
    $light-green: #dcf9d3
    $dark-green: #5cae5c

    .add-form-wrapper
        display: flex
        justify-content: center
        .add-form
            font-weight: 700
            width: 50%
            justify-content: flex-start


            .return-link
                cursor: pointer
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
                .error
                    border: 1px solid red
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
                .form-inputs
                    .add-button-wrapper
                        button
                            width: 100%
</style>