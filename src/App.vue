<template>
    <div class="container">
        
       <div class="row mb-3">
           <div class="col-md-9">
                <h1>My Online Store</h1>
           </div>
            <div class="col-md-3">
                <ShopCart/>
            </div>
       </div>
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
    import ShopCart from './components/ShoppingCart.vue'

    export default {
        computed:{
            forSale() {return this.$store.getters.forSale},
            inCart() {return this.$store.getters.inCart}
        },
        components: {
            Products: Products,   
            ShopCart: ShopCart     
        }
    }
</script>

