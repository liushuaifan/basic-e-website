<template>
    <div>
        <h1> Your Cart</h1>
        <CartItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"/>

        <cartSummaryPaymentCard
       />
    </div>
    
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import cartSummaryPaymentCard from '../components/cart/cartSummaryPaymentCard.vue'


export default{
    components:{
        CartItemCard,cartSummaryPaymentCard
    },
    computed:{
        products(){
            return this.$store.getters.cartItems
        }
    }
}
</script>
