import { employeesService } from "../../services/employeesService";

export default {
  state: {
    employees: [],
  },
  mutations: {
    infoAllEmployees(state, employees) {
      state.employees = employees;
    },
  },
  actions: {
    getAllEmployees({ commit }, { perPage, page }) {
      return employeesService.getEmployees(perPage, page).then((res) => {
        commit("infoAllEmployees", res.data);
      });
    },
  },
  getters: {
    getEmployees(state) {
      return state.employees;
    },
  },
};
