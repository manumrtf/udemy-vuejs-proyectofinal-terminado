<template>
    <router-link :to="{name:'Topic', params:{id:topic.id}}">
    <div class="h-52 shadow-md rounded-md grid grid-cols-2">
      <div class="flex items-center justify-center">
        <p class="font-bold text-2xl uppercase">{{ topic.name }}</p>
      </div>
      <img class="h-full object-cover" :src="topic.image_url" />
    </div>
  </router-link>
</template>

<script setup>
defineProps(['topic'])
</script>
