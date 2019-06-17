import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

export default new VueX.Store({

    state: {
   
        forSale:[
            {
                invId:1, name: "Silla", image:'//placehold.it/200', price:500
            },
            {
                invId:2, name: "Escritorio", image:'//placehold.it/200', price:650
            },
            {
                invId:3, name: "iPad", image:'//placehold.it/200', price:2900
            },
            {
                invId:4, name: "Xbox", image:'//placehold.it/200', price:5000
            },

        ],
        inCart: [

        ]


    },
    mutations:{
        ADD_TO_CART(state, invId) { state.inCart.push(invId);},
    },
    actions:{
        addToCart(context, invId) { context.commit('ADD_TO_CART', invId);} 
    },
    getters:{

        forSale: state => state.forSale,
        inCart: state => state.inCart,

    }

});