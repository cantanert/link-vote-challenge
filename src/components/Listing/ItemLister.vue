<template>
    <div class="item-lister">
        <Toast :items="toastItems" :action-title="statics.texts.deleted"/>
        <Item v-for="(item,index) in paginatedData"
              :item='item'
              :key="index"
              @itemDeleted="itemDeleted($event)"
        />
        <p v-show="isListEmpty">There in no item exist.</p>
        <CustomPagination
                :total-pages="paginationCount"
                :current-page="currentPage"
                :max-button-count="maxButtonCount"
        @pageChanged="onPaginated"/>
    </div>
</template>

<script>
    import Item from "./Item";
    import {mapGetters} from 'vuex';
    import Toast from "../Toast";
    import statics from '../../statics/vote-link-statics'
    import enums from '../../statics/enums'
    import CustomPagination from '../../components/CustomPagination'


    export default {
        data(){
            return {
                deletedItemTitle: '',
                toastItems: [],
                currentPage: 1,
                maxButtonCount: 5,
                paginationLimit: 5,
                statics: statics
            }
        },
        name: "ItemLister",
        components: {Toast, Item, CustomPagination},
        computed: {
            ...mapGetters({
                listedItems: enums.getters.listedItemsGetter
            }),
            isListEmpty(){
                return this.paginatedData.length === 0
            },
            paginatedData(){
                let arr = [...this.listedItems];
                const spliceStart = (this.currentPage-1) * this.paginationLimit;
                const spliceEnd = this.paginationLimit;
                return arr.splice(spliceStart,spliceEnd);
            },
            paginationCount(){
                return (this.listedItems.length > 0)
                    ? Math.ceil(this.listedItems.length / this.paginationLimit)
                    : 1

            }
        },
        methods: {
            onPaginated(newPage){
                this.currentPage = newPage;
            },
            itemDeleted(data){
                this.backPreviousPageIfAvailable();
                this.deletedItemTitle = data ;
                this.openToast();
            },
            backPreviousPageIfAvailable(){
                if(this.isListEmpty && this.currentPage > 1) this.currentPage--;
            },
            openToast(){
                this.toastItems.push(this.deletedItemTitle);
                setTimeout(()=>{
                    this.toastItems.splice(0,1);
                },2000);
            },
        },
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