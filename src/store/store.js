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
    },
    actions:{
    },
    getters:{

        forSale: state => state.forSale,
        inCart: state => state.inCart,

    }

});