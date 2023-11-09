<template>
    <div class="car__container">
        <div class="car__list">
            <div v-for="item in getCarsList" :key="item.id" class="car__item">
                <a :href="item.link" class="car__block">
                    <div class="car__image-block">
                        <img :src="item.image" />
                    </div>
                    <div class="car__info-car car-info">
                        <h4 class="car-info__title">{{ item.name }}</h4>
                        <div class="car-info__price-block">
                            <div class="car-info__price-usd">{{ (item.price / 34).toFixed(0) }} $</div>
                            <div class="car-info__price-uah">{{ item.price }} грн</div>
                        </div>
                        <div class="car-info__sub-info">
                            <div class="car-info__kilometer">{{ item.kilometer }} тыс. км</div>
                            <div class="car-info__gas">{{ item.gas }}</div>
                            <div class="car-info__location">{{ item.location }}</div>
                            <div class="car-info__transmission">{{ item.transmission }}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemList',

    props: {
        carsData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/index.scss';
</style>
