<template>
    <div class="item-lister">
        <Toast :visibility="isToastOpen" :text="deletedItemTitle" :action="statics.texts.deleted"/>
        <Item v-for="(item,index) in listedItems"
              :item='item'
              :key="index"
              @itemDeleted="itemDeleted($event)"
        />
        <p v-show="isListEmpty">There in no item exist.</p>
    </div>
</template>

<script>
    import Item from "./Item";
    import {mapGetters} from 'vuex';
    import Toast from "../Toast";
    import statics from '../../statics/vote-link-statics'


    export default {
        data(){
            return {
                isToastOpen: false,
                deletedItemTitle: '',
                statics: statics
            }
        },
        name: "ItemLister",
        components: {Toast, Item},
        computed: {
            ...mapGetters({
                listedItems: 'listedItemsGetter'
            }),
            isListEmpty(){
                return this.listedItems.length === 0
            }
        },
        methods: {
            itemDeleted(data){
                this.deletedItemTitle = data ;
                this.openToast();
            },
            openToast(){
                this.isToastOpen = true;
                setTimeout(()=>{
                    this.isToastOpen = false
                },2000)
            }
        }
    }
</script>

<style scoped lang="sass">
    .item-lister
        display: flex
        flex-direction: column
        p
            margin-top: 20px
            font-size: 20px

</style>