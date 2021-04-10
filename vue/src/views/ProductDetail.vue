<template>
  <div class="product">
    <h1 style="font-size: 50px">Product Detail</h1>
    <Product/>
  </div>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'ProductDetail',
  components: {
    Product
  }
}
</script>
