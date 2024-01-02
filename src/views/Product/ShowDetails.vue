<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <!--            display image-->
      <div class="col-md-4 col-12">
        <img :src="product.image_url" class="img-fluid" />
      </div>
      <!--            display product details-->
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="catgory font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">$ {{ product.price }}</h6>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Quantity</span>
            </div>
            <input type="number" class="form-control" v-model="quantity" />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button class="btn" id="add-to-cart-button" @click="addToCart">
              Add to Cart
            </button>
          </div>
        </div>
        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>This is a sample description</li>
            <li>click the below button to add the item into your wishlist</li>
          </ul>
        </div>
        <button
          id="wishlist-button"
          class="btn mr-3 p-1 py-0"
          @click="addToWishlist()"
        >
          {{ wishListString }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  data() {
    return {
      product: {},
      category: {},
      wishListString: "Add to wishlist",
    };
  },
  props: ["baseURL", "products", "categories"],
  methods: {
    addToWishlist() {
      if (!this.token) {
        // user is not logged in
        // show some error
        swal({
          text: "please login to add item in wishlist",
          icon: "error",
        });
        return;
      }
      // add item to wishlist
      axios
        .post(`${this.baseURL}wishlist/add?token=${this.token}`, {
          id: this.product.id,
        })
        .then((res) => {
          if (res.status === 201) {
            this.wishListString = "Added to Wishlist";
            swal({
              text: "Added to Wishlist",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    // add to cart

    addToCart() {
      if (!this.token) {
        // user is not logged in
        // show some error
        swal({
          text: "please login to add item in cart",
          icon: "error",
        });
        return;
      }

      // add to cart

      axios
        .post(`${this.baseURL}/cart/add?token=${this.token}`, {
          productId: this.id,
          quantity: this.quantity,
        })
        .then((res) => {
          if (res.status == 201) {
            swal({
              text: "Product added in cart",
              icon: "success",
            });
            this.$emit("fetchData");
          }
        })
        .catch((err) => console.log("err", err));
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
  },
};
</script>
<style scoped>
.img-fluid {
  max-width: 100%; /* Ensures the image is responsive */
  height: 90%; /* Maintains the aspect ratio */
  border-radius: 10px; /* Rounded corners for a softer look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  transition: transform 0.3s ease; /* Smooth transition for hover effect */
}

.img-fluid:hover {
  transform: scale(1.05); /* Slightly enlarge image on hover */
}

/* Styling for product name and category */
h4 {
  color: #333; /* Dark color for product name */
  margin-bottom: 0.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.catgory {
  font-weight: 400; /* Bootstrap primary color for category */
  font-size: 1rem;
}

/* Price styling */
.font-weight-bold {
  color: #007bff; /* Green color for price */
  font-size: 1.5rem;
}

/* Product description styling */
p {
  color: #555; /* Darker text for readability */
  /* Improved line spacing */
}

/* Features section */
.features h5 {
  color: #333;
  margin-bottom: 0.5rem;
}

.features ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0;
  margin: 0;
}
input[type="number"] {
  width: 100px; /* Adjust this value as needed */
}

/* Wishlist button */
#wishlist-button {
  background-color: #febd69; /* Blue background */
  color: white; /* White text */
  padding: 20px 50px; /* Padding */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Transition for background color */
}

#add-to-cart-button {
  background-color: #febd69;
}
</style>
