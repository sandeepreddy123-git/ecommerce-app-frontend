<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float: right">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-3 col-md-4 col-6 pt-3 d-flex"
      >
        <CategoryBox :category="category"> </CategoryBox>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";
export default {
  name: "CategoriesList",
  props: ["categories"],
  components: { CategoryBox },
  data() {
    return {
      baseURL: "http://localhost:8080",
    };
  },
  methods: {},
  mounted() {},
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
