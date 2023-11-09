<template>
    <h1 class="title">Task #1</h1>
    <div class="wrapper">
        <filter-side-block />
        <div v-if="errorMessage" class="error-msg">{{ errorMessage }}</div>
        <items-list :items-list="filterCarsList" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterSideBlock from './FilterSideBlock.vue'
import ItemsList from './ItemsList.vue'
export default {
    name: 'StorePane',
    components: { FilterSideBlock, ItemsList },

    computed: {
        ...mapGetters(['filterCarsList', 'errorMessage']),
    },
    created() {
        this.getCarsList()
    },
    methods: {
        ...mapActions(['getCarsList']),
    },
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 36px;
    text-align: center;
}
.wrapper {
    display: flex;
    gap: 30px;
}
@import '@/assets/style/index.scss';
</style>
