<template>
    <div class="container">
       
       <h1>My Online Store</h1>

       <div class="row">
           <Products
                v-for="product in forSale" 
                :key="product.invId"
                :invId="product.invId"
                :name ="product.name"
                :image="product.image"
                :price="product.price"
            />
       </div>

       {{inCart}}
    </div>
</template>


<script>
   
    import Products from './components/Products.vue'

    export default {
        computed:{
            forSale() {return this.$store.getters.forSale},
            inCart() {return this.$store.getters.inCart}
        },
        components: {
            Products: Products,        
        }
    }
</script>

