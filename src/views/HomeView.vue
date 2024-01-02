<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            <a href="#start-shopping" class="bg-white px-2 py-2 rounded"> </a>
          </h3>
        </header>
      </div>
      <hr />
    </div>

    <!--    display categories-->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.categorySize"
          :key="index"
          class="col-md-6 col-xl-3 col-12 pt-3 justify-content-around d-flex"
        >
          <CategoryBox :category="categories[index - 1]" />
        </div>
      </div>
    </div>

    <br />
    <!--    display top products-->
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>

      <!--      display products-->

      <div class="row">
        <div
          v-for="index in this.productSize"
          :key="index"
          class="col-md-6 col-xl-3 col-12 pt-3 justify-content-around d-flex"
        >
          <ProductBox :product="products[index - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "../components/Category/CategoryBox";
import ProductBox from "../components/Product/ProductBox";
export default {
  name: "HomeView",
  components: { CategoryBox, ProductBox },
  props: ["categories", "products"],
  data() {
    return {
      categorySize: 0,
      productSize: 0,
    };
  },
  mounted() {
    this.categorySize = Math.min(8, this.categories.length);
    this.productSize = Math.min(8, this.products.length);
  },
};
</script>
<style>
.page-holder {
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#heading {
  font-weight: 700; /* Making the font bolder for better readability */
  font-size: 2rem; /* Increase the font size */
}
.bg-cover {
  background-size: cover !important;
  background-position: center; /* Centers the background image */
}

#background-div {
  background: url("../assets/ecom.jpg") no-repeat center center;
  background-attachment: scroll; /* Change to scroll if fixed is causing issues */
  background-size: cover; /* Cover to ensure the image covers the div */
  height: 30vh; /* Reduce the height to 30% of the viewport height */
  width: 100%; /* Full width */
  opacity: 0.8; /* Optional: Slight transparency */
}

#heading a {
  color: #007bff; /* Bootstrap primary color for the link */
  text-decoration: none;
}

#heading a:hover {
  color: #0056b3; /* Darker shade for hover state */
}

.lead {
  font-size: 1.5rem;
  color: #fff;
}

/* Top Categories Styling */
h2 {
  padding-top: 2rem;
  font-size: 2.5rem; /* Larger font size for headings */
  color: #333; /* Dark color for better contrast */
}
</style>
