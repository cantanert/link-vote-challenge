<template>
    <div class="custom-modal-overlay" v-if="isVisible">
        <div class="custom-modal-container">
            <div class="custom-modal-header">
                <span>{{statics.texts.removeLink}}</span>
                <span @click="declineDeletion" class="closer-icon"><b-icon icon="x"/></span>
            </div>
            <div class="custom-modal-title">
                {{statics.texts.sureToRemove}}
                <p>{{title}}</p>
            </div>
            <div class="custom-modal-actions">
                <button id="ok" @click="approveDeletion">{{statics.buttons.ok}}</button>
                <button id="cancel" @click="declineDeletion">{{statics.buttons.cancel}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import statics from '../statics/vote-link-statics';
    import enums from '../statics/enums';

    export default {
        name: "Modal",
        data(){
          return {
              statics : statics
          }
        },
        props: {
            title: {
                type: String
            },
            isVisible: {
                type: Boolean
            }
        },
        methods: {
            approveDeletion(){
                this.$emit(enums.emits.deleteApproved);
            },
            declineDeletion(){
                this.$emit(enums.emits.deleteDeclined)
            }
        }
    }
</script>

<style scoped lang="sass">
    $modal-background-gray: #d8d8d8
    $pure-black: #000
    $pure-white: #fff
    .custom-modal-overlay
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100vh
        display: flex
        justify-content: center
        align-items: center
        background: rgb(107,105,105);
        background: radial-gradient(circle, rgba(107,105,105,0.8673844537815126) 0%, rgba(4,4,4,0.6825105042016807) 77%);
        z-index: 1
        .custom-modal-container
            width: 50%
            background-color: $modal-background-gray
            .custom-modal-header
                display: flex
                justify-content: space-between
                align-items: center
                background-color: $pure-black
                color: $pure-white
                padding: 0 10px
                span
                    display: flex
                    svg
                        cursor: pointer
                        font-size: 20px
            .custom-modal-title
                padding: 20px
                font-weight: 600
                p
                    text-transform: uppercase
                    font-size: 1.5em
                    font-weight: 900
                    color: $pure-black

            .custom-modal-actions
                padding: 0 20px 20px 20px
                display: flex
                justify-content: space-around
                button
                    width: 100px
                    height: 50px
                    border-radius: 50px
                    background-color: $pure-black
                    color: $pure-white
                    font-weight: 700
    @media screen and (max-width: 767px)
        .custom-modal-overlay
            .custom-modal-container
                width: 75%
    @media screen and (min-width: 1200px)
        .custom-modal-overlay
            .custom-modal-container
                width: 30%
</style>