<template>
  <div class="bg-white min-h-screen pt-10">
    <div
      style="grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))"
      class="grid gap-4 max-w-[1185px] mx-auto"
    >
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </div>
  </div>
</template>

<script setup>
import TopicCard from "../components/TopicCard/TopicCard.vue";
</script>
