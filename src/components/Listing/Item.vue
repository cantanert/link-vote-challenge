<template>
    <div class="item"
         @mouseover="isHovered = true"
         @mouseleave="isHovered = false">
        <div class="item-point-wrapper">
            <span class="point">{{item.point}}</span>
            <span>{{statics.texts.points}}</span>
        </div>
        <div class="item-details-wrapper">
            <div class="item-info">
                <div class="item-name">{{item.title}}</div>
                <div class="item-address">{{item.url}}</div>
            </div>
            <Voter :item="item"/>
        </div>
        <span class="remover" v-show="isHovered" @click="isModalOpen=true">
            <b-icon icon="dash-circle-fill" variant="danger"/>
        </span>
        <Modal v-show="isModalOpen"
               :title="item.title"
               @deleteDeclined="closeModal"
               @deleteApproved="removeItem(item.id, item.title)"/>
    </div>
</template>

<script>
    import Voter from "./Voter";
    import Modal from "../Modal";
    import statics from '../../statics/vote-link-statics';

    export default {
        data(){
            return{
                isHovered: false,
                isModalOpen: false,
                statics: statics
            }
        },
        name: "Item",
        props: ['item'],
        components: {Modal, Voter},
        methods: {
            removeItem(itemId, itemTitle){
                this.$store.commit('itemRemover',itemId);
                this.$emit('itemDeleted',itemTitle);
                this.closeModal();
            },
            closeModal(){
              this.isModalOpen = false;
            }
        },
        computed: {

        }
    }
</script>

<style scoped lang="sass">
    $gray-container-background: #f7f7f7
    $gray-box-background: #ececec
    $pure-black: #000

    .item
        display: flex
        flex: 1
        margin-top: 15px
        margin-bottom: 20px
        position: relative
        &:hover
            border-radius: 5px
            border: 1px solid $gray-box-background
            background-color: $gray-container-background
        .item-point-wrapper
            display: flex
            flex-direction: column
            background-color: $gray-box-background
            width: 100px
            height: 100px
            justify-content: center
            align-items: center
            font-size: 15px
            border: 1px solid $pure-black
            border-radius: 5px
            line-height: 1.1
            span.point
                font-weight: 900
                font-size: 30px
        .item-details-wrapper
            display: flex
            flex-direction: column
            flex: 1
            align-items: flex-start
            padding: 0 20px
            justify-content: space-between
            .item-info
                display: flex
                flex-direction: column
                align-items: flex-start
                width: 100%
                color: black
                line-height: 1
                .item-name
                    font-size: 25px
                    font-weight: 700
        .remover
            position: absolute
            top: -10px
            right: -7px
            cursor: pointer

    @media screen and (max-width: 767px)
        .item
            .item-details-wrapper, .item-point-wrapper
                margin: 0
            .item-details-wrapper
                padding: 0 10px
                .item-info
                    .item-name
                        font-size: 20px
                    .item-address
                        font-size: 12px
            .item-point-wrapper
                width: 75px
                height: 75px



</style>