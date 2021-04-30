<template>
  <div class="row">
    <HrDepartmentCard
      label="Количество Сотрудников"
      :value="employees.length"
    />
    <HrDepartmentCard label="Количество Мужчин" :value="countMans()" />
    <HrDepartmentCard label="Количество Женщин" :value="countWomans()" />
    <HrDepartmentCard label="Отдел Айти" :value="countITDepartment()" />
    <HrDepartmentCard
      label="Отдел Бухгалтерия"
      :value="countAuditDepartment()"
    />
    <HrDepartmentCard
      label="Отдел Маркетинг"
      :value="countMarketingDepartment()"
    />
    <HrDepartmentCard
      label="Средний Возраст Сотрудников"
      :value="countMidOld()"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HrDepartmentCard from "../../components/hrDepartment/HrDepartmentCard";

export default {
  name: "Hr",
  components: { HrDepartmentCard },
  computed: {
    ...mapState({
      employees: (state) => state.allEmployees.employees,
    }),
  },

  created() {
    this.$store.dispatch("getAllEmployeess");
  },
  methods: {
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

<style scoped>
.row {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
