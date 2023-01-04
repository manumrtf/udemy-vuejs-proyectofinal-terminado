<template>
  <div>
    <ol class="grid pl-4 md:pl-0">
      <CourseContent v-for="lesson of lessons" :key="lesson.id" :lesson="lesson" :courseid="courseId" />

    </ol>
  </div>
</template>

<script setup>
import CourseContent from "./CourseContent.vue";
import supabase from "../../db/db"
import {onBeforeRouteUpdate, useRoute} from "vue-router"
import {onUpdated, ref} from "vue"
const route = useRoute()


const lessons = ref()

const courseId = route.params.id

async function getLessons() {
  const {data,error} = await supabase.from("lessons").select().eq("course_id",route.params.id)
  if(error) {
    return console.log(error)
  }

  console.log(data)

  lessons.value = data
}

getLessons()



</script>
