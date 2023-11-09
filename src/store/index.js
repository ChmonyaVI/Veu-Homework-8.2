import { createStore } from 'vuex'
import listCard from '../data/listCars.json'
import { getUniqueSortedValues } from './helper'

const store = createStore({
    state() {
        return {
            carsList: [],
            autoTypeSelectVal: null,
            bodyTypeBoxVal: [],
            brandOptionsSelectVal: null,
            modelOptionsSelectVal: null,
            errorMessage: null,
        }
    },
    getters: {
        carsList: ({ carsList }) => carsList,

        getAutoTypeSelectVal: ({ autoTypeSelectVal }) => autoTypeSelectVal,
        getBodyTypeBoxVal: ({ bodyTypeBoxVal }) => bodyTypeBoxVal,
        getBrandOptionsSelectVal: ({ brandOptionsSelectVal }) => brandOptionsSelectVal,
        getModelOptionsSelectVal: ({ modelOptionsSelectVal }) => modelOptionsSelectVal,
        //Отсылает сообщенио об пустом списке
        errorMessage: ({ errorMessage }) => errorMessage,

        brandOptions: (state) => getUniqueSortedValues(state.carsList, 'brand'),
        autoTypeOptions: (state) => getUniqueSortedValues(state.carsList, 'autoType'),
        bodyTypeOptions: (state) => getUniqueSortedValues(state.carsList, 'bodyType'),
        modelOptions: (state) => getUniqueSortedValues(state.carsList, 'model'),

        filterCarsList: (state) => {
            let filteredCars = state.carsList.filter((itemCar) => {
                const autoTypeCondition = !state.autoTypeSelectVal || itemCar.autoType === state.autoTypeSelectVal
                const bodyTypeCondition =
                    !state.bodyTypeBoxVal.length || state.bodyTypeBoxVal.includes(itemCar.bodyType)
                const brandCondition = !state.brandOptionsSelectVal || itemCar.brand === state.brandOptionsSelectVal
                const modelCondition = !state.modelOptionsSelectVal || itemCar.model === state.modelOptionsSelectVal

                return autoTypeCondition && bodyTypeCondition && brandCondition && modelCondition
            })
            if (filteredCars.length === 0) {
                return (state.errorMessage = 'Автомобили, с данными параметрами не найдены.'), (filteredCars = [])
            } else {
                state.errorMsg = null
            }
            console.log(filteredCars)
            return filteredCars
        },
    },
    mutations: {
        setCarsList(state, list) {
            state.carsList = list
        },
        setAutoType(state, type) {
            state.autoTypeSelectVal = type
        },
        setBrand(state, brand) {
            state.brandOptionsSelectVal = brand
        },
        setModel(state, model) {
            state.modelOptionsSelectVal = model
        },
        setBodyType(state, bodyType) {
            if (state.bodyTypeBoxVal.includes(bodyType)) {
                state.bodyTypeBoxVal = state.bodyTypeBoxVal.filter((item) => item !== bodyType)
            } else {
                state.bodyTypeBoxVal.push(bodyType)
            }
        },

        dropAllFilters(state) {
            state.autoTypeSelectVal = null
            state.bodyTypeBoxVal = []
            state.brandOptionsSelectVal = null
            state.modelOptionsSelectVal = null
            state.carsList
        },
    },
    actions: {
        getCarsList({ commit }) {
            commit('setCarsList', listCard)
        },
        updateAutoType({ commit }, type) {
            commit('setAutoType', type)
        },
        updateBrand({ commit }, brand) {
            commit('setBrand', brand)
        },
        updateModel({ commit }, model) {
            commit('setModel', model)
        },
        updateBodyType({ commit }, bodyType) {
            commit('setBodyType', bodyType)
        },
        dropFilters({ commit }) {
            commit('dropAllFilters')
        },
    },
    modules: {},
})
export default store
