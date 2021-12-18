const initialState = () => ({
    PRODUCT_ID: "",
})
const state = initialState()

const getters = {
    PRODUCT_ID: state => state.PRODUCT_ID,
 
}

const mutations = {
    SET_PRODUCT_ID(state, data) {
        state.PRODUCT_ID = data
    },
}

const actions = {
    // increaseCounter ({commit,state}, payload){
    //     commit('INCREASE_CURRENT_COUNTER')
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}