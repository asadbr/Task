import Vue from "vue";
import Vuex from "vuex";
import employees from "./modules/employees";
import allEmployees from "./modules/allEmployees";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employees,
    allEmployees,
  },
});
