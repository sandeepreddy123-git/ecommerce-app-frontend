<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.image_url"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description.substring(0, 65) }}...</p>
      </router-link>
      <router-link
        :to="{ name: 'EditProduct', params: { id: product.id } }"
        v-show="$route.name == 'ProductList'"
      >
        <button class="btn btn-primary">Edit</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  props: ["product"],
};
</script>
<style scoped>
.card-img-top {
  object-fit: cover;
  width: 100%;
  height: 200px; /* Adjust based on your preference */
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.card-body {
  padding: 15px;
  background-color: #f8f9fa; /* Light background */
}

.card-title {
  font-size: 1.25rem; /* Larger font size */
  color: #333; /* Darker color for better readability */
  margin-bottom: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.card-text {
  color: #555; /* Slightly darker text */
  margin-bottom: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.card-body a.router-link-active,
.card-body a.router-link-active:hover {
  text-decoration: none; /* Remove text decoration */
  color: inherit; /* Maintain the original text color */
}

.card-body a.router-link-active:hover .card-title,
.card-body a.router-link-active:hover .card-text {
  text-decoration: none; /* Ensure no text decoration on hover */
}
</style>
