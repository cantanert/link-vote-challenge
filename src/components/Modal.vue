<template>
    <div class="custom-modal-overlay">
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
                <button @click="approveDeletion">{{statics.buttons.ok}}</button>
                <button @click="declineDeletion">{{statics.buttons.cancel}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import statics from '../statics/vote-link-statics';

    export default {
        name: "Modal",
        data(){
          return {
              statics : statics
          }
        },
        props: ['title'],
        methods: {
            approveDeletion(){
                this.$emit('deleteApproved');
            },
            declineDeletion(){
                this.$emit('deleteDeclined')
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
        background-color: rgba(0, 0, 0, 0.6)
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
                    border-radius: 50px
                    background-color: $pure-black
                    color: $pure-white
                    font-weight: 700
</style>