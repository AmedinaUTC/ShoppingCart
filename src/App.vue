<template>
    <div class="container">
       
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
    </div>
</template>

<script>
   
    import Products from './components/Products.vue'

    export default {
        computed:{
            forSale() {return this.$store.getters.forSale}
        },
        components: {
            Products: Products,        
        }
    }
</script>

