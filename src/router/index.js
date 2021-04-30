import Vue from "vue";
import VueRouter from "vue-router";
import Hr from "../views/home/Hr";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hr",
    component: Hr,
  },
  {
    path: "/employees",
    name: "employees",
    component: () => import("../views/employees/EmployeesPage"),
  },
  {
    path: "/employees/:id",
    name: "employees.show",
    component: () => import("../views/employees/EmployShowPage"),
    props: true,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () =>
  //   //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
