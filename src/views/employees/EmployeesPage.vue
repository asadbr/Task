<template>
  <div class="container">
    <div class="mt-4">
      <div>
        <select v-model="selectGender">
          <option value="0">Все</option>
          <option v-for="gender in sex" :key="gender.id" :value="gender.id">
            {{ gender.gender }}
          </option>
        </select>
        <div class="row">
          <div
            v-for="(employ, index) of filteredGenders()"
            :key="index"
            class="my-4 col-12 col-md-3"
          >
            <router-link
              class="link"
              :to="{ name: 'employees.show', params: { id: +employ.id } }"
            >
              <div class="card">
                <img src="./none.jpg" class="card-img-top" alt="..." />
                <div class="card-body text-dark">
                  <div class="card-title">
                    {{ employ.name }} {{ employ.surname }}
                    <br />
                    {{ employ.position }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <template v-if="page !== 1">
                <router-link
                  class="page-link"
                  :to="{ name: 'employees', query: { page: page - 1 } }"
                  rel="prev"
                >
                  предыдущая страница
                </router-link>
              </template>
            </li>

            <li class="page-item" v-if="page <= getEmployees.length">
              <router-link
                class="page-link ms-2"
                :to="{ name: 'employees', query: { page: page + 1 } }"
                rel="next"
              >
                следующая страница
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EmployeesPage",
  data() {
    return {
      sex: [
        { id: "male", gender: "Мужской" },
        { id: "female", gender: "Женский" },
      ],
      selectGender: 0,
    };
  },
  computed: {
    page() {
      return +this.$route.query.page || 1;
    },
    ...mapGetters(["getEmployees"]),
  },
  created() {
    this.$store.dispatch("getAllEmployees", {
      perPage: 4,
      page: this.page,
    });
  },
  methods: {
    filteredGenders: function () {
      return this.getEmployees.filter((employ) => {
        return this.selectGender === 0 || employ.gender === this.selectGender;
      });
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.row {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
