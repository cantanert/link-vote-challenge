<template>
    <div class="item"
         @mouseover="(!isMobile) ? isHovered = true : null"
         @mouseleave="(!isMobile) ? isHovered = false : null">
        <div class="item-point-wrapper">
            <span class="point">{{item.point}}</span>
            <span>{{statics.texts.points}}</span>
        </div>
        <div class="item-details-wrapper">
            <div class="item-info">
                <div class="item-name">{{item.title}}</div>
                <div class="item-address">{{item.url}}</div>
            </div>
            <Voter @upVoted="upVoteClicked" @downVoted="downVoteClicked"/>
        </div>
        <span class="remover" v-show="(isMobile) ? true : isHovered" @click="isModalOpen=true">
            <b-icon icon="dash-circle-fill" variant="danger"/>
        </span>
        <Modal :isVisible="isModalOpen"
               :title="item.title"
               @deleteDeclined="closeModal"
               @deleteApproved="removeItem(item.id, item.title)"/>
    </div>
</template>

<script>
    import Voter from "./Voter";
    import Modal from "../Modal";
    import statics from '../../statics/vote-link-statics';
    import enums from '../../statics/enums';
    import scrolltop from "../../utils/scrollTop";

    export default {
        data(){
            return{
                isHovered: false,
                isModalOpen: false,
                isMobile: false,
                statics: statics
            }
        },
        name: "Item",
        props: {
            item: {
                type: Object
            }
        },
        components: {Modal, Voter},
        methods: {
            upVoteClicked(){
                this.$store.dispatch(enums.actions.upVoter, this.item.id);
            },
            downVoteClicked(){
                this.$store.dispatch(enums.actions.downVoter, this.item.id);
            },
            removeItem(itemId, itemTitle){
                this.$store.commit(enums.mutations.itemRemover,itemId);
                this.$emit(enums.emits.itemDeleted,itemTitle);
                this.closeModal();
            },
            closeModal(){
                scrolltop();
                this.isModalOpen = false;
            },
            isMobileChecker(){
                this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            }
        },
        created() {
            this.isMobileChecker();
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
        margin-bottom: 5px
        padding: 10px
        position: relative
        border: 1px solid transparent
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
            display: flex
            align-items: center
            font-size: 1.5rem
            top: -14px
            right: -13px
            cursor: pointer
            border-radius: 50%
            -webkit-box-shadow: 0 0 11px -1px rgba(117,111,117,1)
            -moz-box-shadow: 0 0 11px -1px rgba(117,111,117,1)
            box-shadow: 0 0 11px -1px rgba(117,111,117,1)

    @media screen and (max-width: 767px)
        .item
            border: 1px solid $gray-box-background
            &:hover
                background-color: unset
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
            .remover
                top: -7px
                right: -7px



</style>