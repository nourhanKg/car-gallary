import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import { createRouter, createWebHistory } from "vue-router";
import homePage from "./components/pages/homepage.vue";
import allCars from "./components/pages/allcars.vue";
import createCar from "./components/pages/createcar.vue";
import carDetails from "./components/pages/cardetails.vue";
import errorApp from "./components/pages/error.vue";

const routes = [
  {
    path: "/",
    component: homePage,
    alias: "/home",
  },
  {
    path: "/cars",
    component: allCars,
    alias: "/cars",
  },
  {
    path: "/cars/:id",
    component: carDetails,
  },
  {
    path: "/create",
    component: createCar,
  },
  {
    path: "/:NotFound(.*)*",
    component: errorApp,
    meta: {
      hideNavbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
