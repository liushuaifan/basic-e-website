<template>
    <div class="cart-item-card">
        <h3>Cart Total: ${{ cart_total.toFixed(2) }}</h3>

        <button class="view-product-button">Pay by Credit Card</button>
        <br>
        <h4>You can enter coupon here and get your own discount!</h4>
        <input type="text" name="coupon" v-model="coupon">
        
    </div>
</template>

<script>
export default {
    computed: {
        cart_total() {
            if (this.coupon == "20%OFF") {
                return this.$store.getters.cartTotal * 0.8
            }
            else if (this.coupon == "10$OFF") {
                return this.$store.getters.cartTotal - 10
            }
            else if (this.coupon == "FREE") {
                return 0
            }
            else {
                return this.$store.getters.cartTotal
            }
            
        }
    },
    data() {
        return {
            coupon: null
        }
    }
    
}
</script>
