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
    getAllEmployeess({ commit }) {
      return employeesService.getAllEmployees().then((res) => {
        commit("infoAllEmployees", res.data);
      });
    },
  },
};
