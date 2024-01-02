<template>
  <AppNavbar :cartCount="cartCount" @resetCartCount="resetCartCount" />
  <br />
  <router-view
    v-if="categories && products"
    style="min-height: 80vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  >
  </router-view>
  <FooterShow />
</template>

<script>
import AppNavbar from "./components/AppNavbar";
import FooterShow from "./components/FooterShow";
import axios from "axios";
export default {
  components: { AppNavbar, FooterShow },
  data() {
    return {
      baseURL: "https://ecommerce-backend-app-5b7117bfb8fd.herokuapp.com/",
      products: null,
      categories: null,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      // api call to get all the categories
      await axios
        .get(this.baseURL + "category/list")
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log("err", err));

      // api call to get the products

      await axios
        .get(this.baseURL + "product/list")
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log("err", err));
      // fetch cart item if token is present i.e logged in
      if (this.token) {
        axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => console.log("err", err));
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  resetCartCount() {
    this.cartCount = 0;
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
