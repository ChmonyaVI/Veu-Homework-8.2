<template>
    <div class="car__container">
        <div class="car__list">
            <div v-for="car in carsData" :key="car.id" class="car__item">
                <a :href="car.link" class="car__block">
                    <div class="car__image-block">
                        <img :src="car.image" />
                    </div>
                    <div class="car__info-car car-info">
                        <h4 class="car-info__title">{{ car.name }}</h4>
                        <div class="car-info__price-block">
                            <div class="car-info__price-usd">{{ (car.price / 34).toFixed(0) }} $</div>
                            <div class="car-info__price-uah">{{ car.price }} грн</div>
                        </div>
                        <div class="car-info__sub-info">
                            <div class="car-info__kilometer">{{ car.kilometer }} тыс. км</div>
                            <div class="car-info__gas">{{ car.gas }}</div>
                            <div class="car-info__location">{{ car.location }}</div>
                            <div class="car-info__transmission">{{ car.transmission }}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemsList',

    props: {
        carsData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped></style>
