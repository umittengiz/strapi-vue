<template>
  <div>
    <h1>Orders</h1>
    <Cart />
    <Products />
  </div>
</template>

<script>
import Cart from "../../components/cart/Cart.vue";
import Products from "../../components/products/Products.vue";
export default {
  components: { Cart, Products },
  name: "Order",
};
</script>

<style lang="scss" scoped></style>
