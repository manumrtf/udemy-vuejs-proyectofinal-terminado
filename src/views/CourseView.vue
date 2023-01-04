<template>
  <div class="bg-white min-h-screen">
    <div v-if="course" class="md:flex max-w-7xl md:mx-auto">
      <div>
        <div class="flex flex-col items-center md:items-start md:px-8">
          <img
            src="https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F582%2F847%2Ffull%2Fcompass.png&w=256&q=100"
            class="w-[200px] h-[200px] md:hidden"
          />
          <h2
            class="capitalize font-bold text-center text-3xl md:text-6xl md:text-left"
          >
            {{course.name}}
          </h2>
          <div class="flex">
          <span v-for="rating of new Array(course.rating)" class="text-yellow-400 text-xl mt-2">★</span>
        </div>
          <a class="bg-blue-600 text-white p-4 px-7 rounded-md mt-4 md:hidden"
            >Start Watching</a
          >
        </div>
        <div
          class="flex flex-col gap-4 mt-10 text-md px-1 max-w-xl mx-auto md:mx-0 md:px-8"
          v-html="course.description"
        >
         
        </div>
        <div class="mt-10 px-2 grid gap-4">
          <p class="mb-4 font-bold text-center">Reviews</p>
          <ReviewCard />
          <ReviewCard />

          <ReviewCard />
        </div>
      </div>
      <div
        class="mt-8 px-2 md:flex md:flex-col md:items-center md:gap-5 md:w-full"
      >
        <img
          src="https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F582%2F847%2Ffull%2Fcompass.png&w=256&q=100"
          class="w-[200px] h-[200px] min-w-[200px] hidden md:block md:w-2/4 md:h-fit"
        />
        <a
          class="bg-blue-600 text-white p-4 px-7 rounded-md block max-w-[159.59px] mx-auto"
          >Start Watching</a
        >
        <h2 class="text-2xl font-bold mb-5 mt-10 md:mb-0">Course Content</h2>
        <CourseContentList />
      </div>
    </div>
  </div>
</template>

<script setup>
import ReviewCard from "../components/ReviewCard/ReviewCard.vue";
import CourseContentList from "../components/CourseContentList/CourseContentList.vue";
import supabase from "../db/db"
import {useRoute} from "vue-router"
import {ref} from "vue"
const course = ref()

async function getCourseInfo() {

  const route = useRoute()

  const {data,error} = await supabase.from("courses").select().eq("id",route.params.id).single()

  if(error) {
    return console.log(error)
  }

  console.log(data)
  course.value = data

}

getCourseInfo()

</script>
