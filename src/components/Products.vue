<template>
    <div class="col-md-3">
        <div class="card">
            <img :src="image" :alt="name" class="card-img-top" />
            <div class="card-body">
                <h4 class="card-title"> {{name}} </h4>
                <div class="card-text"> {{price | dollars}}</div>
                <div class= "row justify-content-end">
                    <button class="btn btn-primary" @click="addToCart(invId)"> Add to Cart </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Products",
    props:['invId','name','price','image'],
    filters:{
        dollars: num => '$' + num
    },
    methods:{

        addToCart(invId){
            this.$store.dispatch('addToCart',invId);
        }
    }
}
</script>

