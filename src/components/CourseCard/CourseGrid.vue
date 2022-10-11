<template>
  <div
    class="gap-4 grid justify-items-center"
    style="grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))"
  >
    <CourseCard v-for="(item, index) in items" :key="index" />
  </div>
</template>

<script setup>
import CourseCard from "./CourseCard.vue";
const items = [1, 2, 3, 4, 5, 6, 7, 8];
</script>
