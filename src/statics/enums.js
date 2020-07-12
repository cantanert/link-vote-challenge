export default {
    localStorageName: 'listedItems',
    orderEnums: {
        LESS: 'LESS',
        MOST: 'MOST'
    },
    getters: {
        listedItemsGetter: 'listedItemsGetter'
    },
    mutations: {
        loadFromLocalStorage: 'loadFromLocalStorage',
        itemRemover: 'itemRemover',
        itemAdder: 'itemAdder'
    },
    actions:{
        orderByParam: 'orderByParam',
        upVoter: 'upVoter',
        downVoter: 'downVoter'
    },
    emits: {
        itemDeleted: 'itemDeleted',
        deleteApproved: 'deleteApproved',
        deleteDeclined: 'deleteDeclined',
        upVoted: 'upVoted',
        downVoted: 'downVoted'
    }

}