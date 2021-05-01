<template>
  <div class="col-12 col-lg-4 mt-4">
    <div class="card">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col">
            <h6 class="text-muted mb-2">{{ label }}</h6>
            <span class="h4 mb-0"> {{ value }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HrDepartmentCard",
  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
  },
};
</script>

<style scoped></style>
