<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin" class="flext-item border">
          <h2 class="pt-4">&nbsp; Sign-In</h2>
          <form @submit="signin" class="form-group pt-4 pl-4 pr-4">
            <div class="form-group">
              <label>Email </label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label>Password </label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                required
              />
            </div>
            <button class="btn btn-primary mt-2 py-2.5">
              Click to Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["baseURL"],
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      const body = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post(`${this.baseURL}user/signin`, body)
        .then((res) => {
          this.$router.replace("/");
          localStorage.setItem("token", res.data.token);
          swal({
            text: "Login successful",
            icon: "success",
          });
          this.$emit("fetchData");
          this.$router.push({ name: "Home" });
        })
        .catch((err) => console.log("err", err));
    },
  },
};
</script>
<style scoped>
.btn {
  background-color: #0056b3; /* Green background */
  color: white; /* White text */
  padding: 10px 20px; /* Padding */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Transition for background color */
}

.btn:hover {
  background-color: #4caf50; /* Darker shade for hover state */
}

@media screen and (min-width: 992px) {
  #signin {
    width: 40%; /* Corrected width */
  }
}
</style>
