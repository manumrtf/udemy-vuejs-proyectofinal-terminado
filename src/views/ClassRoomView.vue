<template>
  <div>
    <div class="lg:flex">
      <!--This will be replaced by a real video player -->
      <div
        class="border-2 border-red-600 h-80 flex items-center justify-center w-full"
      >
        Video player
      </div>
      <!---->
      <div class="mt-6 pl-4">
        <p class="font-bold text-lg">Lessons</p>
        <CourseContentList />
      </div>
    </div>
    <div class="pl-4 mt-6">
      <p class="font-bold text-lg">Comments</p>
      <ClassCommentList />
    </div>
  </div>
</template>

<script setup>
import CourseContentList from "../components/CourseContentList/CourseContentList.vue";
import ClassCommentList from "../components/ClassComment/ClassCommentList.vue";
</script>
