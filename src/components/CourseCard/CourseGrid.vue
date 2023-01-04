<template>
  <div
    class="gap-4 grid justify-items-center"
    style="grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))"
  >
    <CourseCard v-for="course of courses" :course="course" :key="course.id"/>
  </div>
</template>

<script setup>
import CourseCard from "./CourseCard.vue";
import supabase from "../../db/db"
import {ref} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()

const courses = ref([])

async function getCourses() {
  const {data,error} = await supabase.from("courses").select().eq("topic_id",route.params.id)

  if(error) {
    return console.log(error)
  }

  console.log(data)

  courses.value = data

}

getCourses()


</script>
