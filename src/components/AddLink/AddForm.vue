<template>
    <div class="add-form-wrapper">
        <div class="add-form">
            <Toast :items="toastItems" :action-title="statics.texts.added"/>
            <ReturnLink :text="statics.texts.returnToList" url="/"/>
            <h2 class="form-title">{{statics.texts.addNewLink}}</h2>
            <div class="form-inputs">
                <p class="link-name-title" >{{statics.texts.linkName}}</p>
                <input v-model="title"
                       placeholder="e.g Alphabet"
                        :class="(titleError ? 'error' : '')">
                <p class="link-url-title">{{statics.texts.linkUrl}}</p>
                <input v-model="url"
                       placeholder="e.g http.//abc.xyz"
                       :class="(urlError ? 'error' : '')">
                <div class="add-button-wrapper">
                    <button @click="addEventHandler">{{statics.buttons.add}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Toast from "../Toast";
    import ReturnLink from "./ReturnLink";
    import Statics from '../../statics/vote-link-statics'
    import enums from '../../statics/enums'

    export default {
        components: {ReturnLink, Toast},
        data(){
          return{
              title: '',
              url: '',
              titleError: false,
              urlError:false,
              addedItemsTitle:'',
              toastItems: [],
              statics: Statics
          }
        },
        name: "AddForm",
        methods:{
            addEventHandler(){
                if(this.validateInputs()){
                    this.$store.commit(enums.mutations.itemAdder,{
                        title: this.title,
                        url: this.url
                    });
                    this.addedItemsTitle = this.title;
                    this.clearInputs();
                    this.showToast();
                }
            },
            showToast(){
                this.toastItems.push(this.addedItemsTitle);
                setTimeout(()=>{
                    this.toastItems.splice(0,1);
                },2000)
            },
            validateInputs(){
                if(this.title && this.url){
                    this.titleError = false;
                    this.urlError = false;
                    return true;
                }
                this.titleError = !this.title;
                this.urlError = !this.url;
            },
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
            .form-title
                display: flex
                justify-self: flex-start
                margin: 40px 0
                font-weight: 900
            .form-inputs
                display: flex
                flex-direction: column
                .error
                    border: 2px solid red
                    -webkit-box-shadow: 0 0 10px 0 rgba(148,142,148,1)
                    -moz-box-shadow: 0 0 10px 0 rgba(148,142,148,1)
                    box-shadow: 0 0 10px 0 rgba(148,142,148,1)
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