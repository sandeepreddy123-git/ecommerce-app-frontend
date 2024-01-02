import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCategory from "../views/Category/AddCategory.vue";
import CategoriesList from "../views/Category/CategoriesList.vue";
import Admin from "../views/AdminPanel.vue";
import ProductsList from "../views/Product/ProductsList.vue";
import AddProduct from "../views/Product/AddProduct.vue";
import EditCategory from "../views/Category/EditCategory.vue";
import EditProduct from "../views/Product/EditProduct.vue";
import ShowDetails from "../views/Product/ShowDetails.vue";
import ListProducts from "../views/Category/ListProducts.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import WishList from "../views/Product/WishList.vue";
import CartItems from "../views/CartItems.vue";
import SuccessPage from "../views/Payment/SuccessPage.vue";
import FailedPage from "../views/Payment/FailedPage.vue";
import CheckoutPage from "../views/Checkout/CheckoutPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/admin/category/list",
    name: "CategoriesList",
    component: CategoriesList,
  },
  {
    path: "/category/show/:id",
    name: "ListProducts",
    component: ListProducts,
  },
  {
    path: "/admin/category/edit/:id",
    name: "EditCategory",
    component: EditCategory,
  },
  {
    path: "/admin/product/edit/:id",
    name: "EditProduct",
    component: EditProduct,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/product/list",
    name: "ProductsList",
    component: ProductsList,
  },
  {
    path: "/admin/product/add",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/product/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/cart",
    name: "CartItems",
    component: CartItems,
  },
  {
    path: "/payment/success",
    name: "SuccessPage",
    component: SuccessPage,
  },
  {
    path: "/payment/failed",
    name: "FailedPage",
    component: FailedPage,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
