<template>
  <div class="bg-white flex flex-col items-center">
    <div class="w-full max-w-5xl">
      <div class="px-4 mt-4 bg-white py-4 mb-5">
        <div class="max-w-[800px]">
          <h1 class="text-8xl font-bold">Nextjs</h1>
          <p class="my-4 text-md">
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more. No
            config is needed.
          </p>
          <p class="my-4 text-md">
            You can use React to build your UI, then incrementally adopt Next.js
            features to solve common application requirements such as routing,
            data fetching, and integrations - all while improving the developer
            and end-user experience.
          </p>
          <p class="my-4 text-md">
            Whether you’re an individual developer or part of a larger team, you
            can leverage React and Next.js to build fully interactive, highly
            dynamic, and performant web applications.
          </p>
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
</script>
