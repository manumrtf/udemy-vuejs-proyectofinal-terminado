<template>
  <router-link :to="{name:'ClassRoom',params: {
    id:courseid,
    classid:lesson.id
  }}">
  <div class="flex gap-2 p-4">
    <span>{{lesson.id}}</span>
    <li class="font-bold capitalize">
      {{lesson.title}}
    </li>
  </div>
</router-link>

</template>


<script setup>
defineProps(["lesson","courseid"])
</script>