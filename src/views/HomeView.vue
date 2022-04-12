<template>
  <div class="home">
    <product-description-drawer
    :product="product"
    :active="active.product_drawer"
    v-on:close-product-drawer="closeProductDrawer()"/>


    <div class="product-cards-container">
      <product-summary-card
      v-for="product in items"
      :key ="product.id"
      :product="product"
      v-on:view-product="viewProduct($event)"/>
      </div>




      <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
  </div>

</template>



<script>
// @ is an alias to /src
import items from '../data/item.js'
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue'
import productDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue'
import emailjs from 'emailjs-com';

export default {

  name: 'HomeView',
  components: {
    ProductSummaryCard,productDescriptionDrawer
  },
  data(){
    return{
      items: items,
      product: null,
      active:{
        product_drawer: false
      },

    }
  },
  methods: {
    viewProduct(product){
      this.product = product
      this.active.product_drawer = true
      console.log(this.product)
    },
    closeProductDrawer(){
      this.active.product_drawer = false;
    },
     sendEmail() {
      emailjs.sendForm('service_opepdxx', 'template_ghy89ev', this.$refs.form, 'TZH5MjQ8EwXtzWz5c')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    },


    
  }

}

</script>


<style lang="scss">
  .product-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
 
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
