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
    countMans() {
      let k = 0;
      for (let item of this.employees) {
        if (item.gender === "male") {
          k++;
        }
      }
      return k;
    },
    countWomans() {
      let k = 0;
      for (let item of this.employees) {
        if (item.gender === "female") {
          k++;
        }
      }
      return k;
    },
    countITDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "IT") {
          k++;
        }
      }
      return k;
    },
    countAuditDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "Audit") {
          k++;
        }
      }
      return k;
    },
    countMarketingDepartment() {
      let k = 0;
      for (let item of this.employees) {
        if (item.department === "Marketing") {
          k++;
        }
      }

      return k;
    },
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
