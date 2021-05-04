<template>
  <div class="row">
    <HrCreateCard label="Количество Сотрудников" :value="employees.length" />
    <HrCreateCard label="Количество Мужчин" :value="countMans()" />
    <HrCreateCard label="Количество Женщин" :value="countWomans()" />
    <HrCreateCard label="Отдел Айти" :value="countITDepartment()" />
    <HrCreateCard label="Отдел Бухгалтерия" :value="countAuditDepartment()" />
    <HrCreateCard label="Отдел Маркетинг" :value="countMarketingDepartment()" />
    <HrCreateCard label="Средний Возраст Сотрудников" :value="countMidOld()" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import HrCreateCard from "../../components/home/HrCreateCard";

export default {
  name: "Hr",
  components: { HrCreateCard },
  computed: {
    ...mapState({
      employees: (state) => state.allEmployees.employees,
    }),
  },

  created() {
    this.getAllEmployees();
  },
  methods: {
    ...mapActions({
      getAllEmployees: "getAllEmployeess",
    }),
    /**
     * Method to count Number of mans of Employees
     * @returns {number}
     */
    countMans() {
      let k = 0;
      for (let item of this.employees) {
        if (item.gender === "male") {
          k++;
        }
      }
      return k;
    },
    /**
     * Method to count Number of womans of Employees
     * @returns {number}
     */
    countWomans() {
      let k = 0;
      for (let item of this.employees) {
        if (item.gender === "female") {
          k++;
        }
      }
      return k;
    },
    /**
     * Method to count Number of Employees in IT Department
     * @returns {number}
     */
    countITDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "IT") {
          k++;
        }
      }
      return k;
    },
    /**
     * Method to count Number of Employees in Audit Department
     * @returns {number}
     */
    countAuditDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "Audit") {
          k++;
        }
      }
      return k;
    },
    /**
     * Method to count Number of Employees in Marketing Department
     * @returns {number}
     */
    countMarketingDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "Marketing") {
          k++;
        }
      }

      return k;
    },
    /**
     * Method to count Mid Old of employees
     * @returns {number}
     */
    countMidOld() {
      var sum = 0;
      for (let item of this.employees) {
        var Date1 = new Date(item.birthdate);
        var Date2 = new Date();
        var Days = Math.floor(
          Math.abs((Date2.getTime() - Date1.getTime()) / (1000 * 3600 * 24))
        );
        sum = sum + Days;
      }
      return Math.floor(sum / 360 / this.employees.length);
    },
  },
};
</script>

<style scoped></style>
