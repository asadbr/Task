import { employeesService } from "../../services/employeesService";

export default {
  state: {
    employees: [],
  },
  mutations: {
    infoEmployees(state, employees) {
      state.employees = employees;
    },
  },
  actions: {
    getAllEmployees(context) {
      return employeesService.getEmployees().then((res) => {
        const employees = res.data;
        context.commit("infoEmployees", employees);
      });
    },
  },
  getters: {
    getEmployees(state) {
      return state.employees;
    },
  },
};
