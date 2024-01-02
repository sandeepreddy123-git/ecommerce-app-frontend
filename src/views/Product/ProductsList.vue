<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4>Our Products</h4>
        <router-link :to="{ name: 'AddProduct' }" style="float: right">
          <button class="btn">Add Product</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <!--            display all the products in productbox component-->
      <div
        v-for="product of products"
        :key="product.id"
        class="col-md-4 col-xl-3 col-12 pt-3 d-flex"
      >
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "../../components/Product/ProductBox.vue";
export default {
  components: { ProductBox },
  props: ["products"],
};
</script>
<style scoped>
.btn {
  background-color: #4caf50; /* Green background */
  color: white; /* White text */
  padding: 10px 20px; /* Top and bottom padding of 10px, left and right padding of 20px */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for background color */
}

.btn:hover {
  background-color: #45a049; /* Darker shade of green on hover */
}

/* Optional: Styling for disabled state */
.btn:disabled {
  background-color: #ccc;
  color: #666;
}
</style>
