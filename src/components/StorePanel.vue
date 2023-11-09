<template>
    <h1 class="title">Task#2</h1>
    <div class="block__container">
        <filter-side-block />
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <items-list :cars-data="filterCarsList" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterSideBlock from './FilterSideBlock.vue'
import ItemsList from './ItemsList.vue'
export default {
    components: { ItemsList, FilterSideBlock },
    name: 'StorePanel',

    computed: {
        ...mapGetters(['filterCarsList', 'errorMessage']),
    },

    methods: {
        ...mapActions(['getCarsList']),
    },

    created() {
        this.getCarsList()
    },
}
</script>

<style lang="scss" scoped></style>
