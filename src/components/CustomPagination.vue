<template>
    <ul class="pagination">
        <li class="pagination-item">
            <button type="button"
                    @click="onClickPreviousPage"
                    :disabled="isInFirstPage">
                <b-icon icon="chevron-left"/>
            </button>
        </li>
        <li v-bind:key="page.name" v-for="page in pages" class="pagination-item">
            <button type="button"
                    @click="onClickPage(page.name)"
                    :disabled="page.isDisabled"
                    :class="{ active: isPageActive(page.name) }">
                {{ page.name }}
            </button>
        </li>
        <li class="pagination-item">
            <button type="button"
                    @click="onClickNextPage"
                    :disabled="isInLastPage"
                    aria-label="Go to next page">
                <b-icon icon="chevron-right"/>
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                activePage: 1,
            }
        },
        name: "CustomPagination",
        props:['totalPages', 'currentPage', 'maxButtonCount'],
        computed: {
            startPage() {
                if (this.totalPages <= this.maxButtonCount){
                    return 1;
                } else if (this.currentPage <= Math.ceil(this.maxButtonCount/2)) {
                    return 1;
                } else if( (this.totalPages - this.currentPage) <= Math.floor(this.maxButtonCount/2)){
                    return this.totalPages - this.maxButtonCount + 1;
                } else {
                    return this.currentPage - Math.floor(this.maxButtonCount/2)
                }
            },
            endPage() {
                return Math.min(this.startPage + this.maxButtonCount - 1, this.totalPages);
            },
            pages() {
                const range = [];
                for (let i = this.startPage; i <= this.endPage; i++ ) {
                    range.push({
                        name: i,
                        isDisabled: i === this.currentPage
                    });
                }
                return range;
            },
            isInFirstPage() {
                return this.currentPage === 1;
            },
            isInLastPage() {
                return this.currentPage === this.totalPages;
            },
        },
        methods: {
            onClickPreviousPage() {
                this.$emit('pageChanged', this.currentPage - 1);
            },
            onClickPage(page) {
                this.$emit('pageChanged', page);
            },
            onClickNextPage() {
                this.$emit('pageChanged', this.currentPage + 1);
            },
            isPageActive(page) {
                return this.currentPage === page;
            },
        }
    }
</script>

<style scoped lang="sass">
    .pagination
        display: flex
        justify-content: center
        .prev-icon, .next-icon
            svg
                font-weight: 900
        button
            background-color: unset
            border: none
            font-weight: 900

</style>