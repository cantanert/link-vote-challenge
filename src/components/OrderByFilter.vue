<template>
    <div class="order-by-filter-wrapper">
        <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
</template>

<script>
    export default {
        name: "OrderByFilter",
        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: 'Most Voted (Z -> A)' },
                    { value: true, text: 'Less Voted (A -> Z)' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>