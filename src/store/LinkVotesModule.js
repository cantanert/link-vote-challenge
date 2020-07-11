const state = {
    listedItems : [
        {id:0, title: 'Hacker News', url: 'https://news.ycombinator.com',point:5},
        {id:1, title: 'Google', url: 'https://www.google.com',point:7},
        {id:2, title: 'Facebook', url: 'https://www.facebook.com',point:20},
        {id:3, title: 'Linkedin', url: 'https://www.facebook.com',point:100},
        {id:4, title: 'alibaba', url: 'https://www.facebook.com',point:50},
    ]
};

const getters = {
    listedItemsGetter(){
        return state.listedItems
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

