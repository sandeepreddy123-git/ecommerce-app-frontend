<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Shopping cart</h3>
      </div>
    </div>

    <!-- loop over the cart items and display -->

    <div
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      class="row mt-2 pt-3 justify-content-around"
    >
      <div class="col-2"></div>
      <div class="col-md-3">
        <img :src="cartItem.product.image_url" alt="" class="img" />
      </div>

      <!-- display product name, quantity -->
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            <router-link
              :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }"
            >
              {{ cartItem.product.name }}
            </router-link>
          </h6>

          <p class="mb-0 font-weight-bold" id="item-price">
            $ {{ cartItem.product.price }} per unit
          </p>
          <p class="mb-0" style="float: left">
            Quantity:{{ cartItem.quantity }}
          </p>
        </div>
        <p class="mb-0" style="float: right">
          Total:
          <span class="font-weight-bold">
            $ {{ cartItem.product.price * cartItem.quantity }}
          </span>
        </p>
        <br />
        <a href="#" @click="deleteItem(cartItem.id)">Remove from cart </a>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>

    <!-- display the price -->
    <div class="total-cost pt-2 text-right">
      <h5>Total : ${{ totalCost.toFixed(2) }}</h5>
      <button type="button" class="btn btn-primary confirm" @click="checkout">
        Confirm order
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
    };
  },
  props: ["baseURL"],
  methods: {
    // fetch All items in cart
    listCartItems() {
      axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => console.log("err", err));
    },
    deleteItem(itemId) {
      axios
        .delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token}`)
        .then((res) => {
          if (res.status == 201) {
            this.$router.go(0);
          }
        })

        .catch((err) => console.log("err", err));
    },
    checkout() {
      this.$router.push({ name: "CheckoutPage" });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
  },
};
</script>
<style scoped>
h4,
h5 {
  color: #484848;
  font-size: 700;
}
.img {
  max-width: 100%; /* Ensures the image is responsive */
  height: 70%; /* Maintains the aspect ratio */
  border-radius: 10px; /* Rounded corners for a softer look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  transition: transform 0.3s ease; /* Smooth transition for hover effect */
}

/* Styles for the cart item container */

/* Style adjustments for other elements can go here */
</style>
