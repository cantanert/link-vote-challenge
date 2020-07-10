const state = {
    sampleState : 2020
};

const getters = {
    sampleStateGetter(){
        return state.sampleState
    }
};

const actions = {

};

const mutations = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

