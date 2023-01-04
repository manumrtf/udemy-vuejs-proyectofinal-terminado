<template>
  <div class="bg-white flex flex-col items-center">
    <div class="w-full max-w-5xl" v-if="topic">
      <div class="px-4 mt-4 bg-white py-4 mb-5">
        <div class="max-w-[800px]">
          <h1 class="text-8xl font-bold">{{ topic.name }}</h1>
          <div v-html="topic.description" class="my-4 text-md flex flex-col gap-4">

          </div>

        </div>
      </div>
    </div>
    <div class="bg-gray-100 w-full flex flex-col items-center">
      <div class="px-4 py-4 w-full max-w-5xl">
        <CourseGrid />
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseGrid from "../components/CourseCard/CourseGrid.vue";
import { useRoute } from "vue-router"
import supabase from "../db/db";
import { ref } from "vue"
const route = useRoute()

const topic = ref()

async function getTopic() {
  const { error, data } = await supabase.from('topics').select().match({ id: route.params.id }).single()

  if (error) {
    return console.log(error)
  }

  console.log(data)

  topic.value = data

}

getTopic()
</script>
