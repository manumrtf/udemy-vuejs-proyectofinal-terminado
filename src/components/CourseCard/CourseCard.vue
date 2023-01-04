<template>
  <router-link :to="{name:'CourseView', params: {id:course.id}}">
  <div
    class="bg-white shadow-md h-[183px] w-full flex items-center px-2 justify-around rounded-md max-w-[412px]"
  >
    <img
      src="https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F582%2F847%2Ffull%2Fcompass.png&w=256&q=100"
      class="w-[100px] h-[100px]"
    />
    <div class="h-full flex flex-col justify-center">
      <p class="text-sm">Course</p>
      <p class="capitalize text-md max-w-[160px] font-bold">
        {{course.name}}
      </p>
    </div>
  </div>
</router-link>
</template>

<script setup>
  defineProps(["course"])
</script>