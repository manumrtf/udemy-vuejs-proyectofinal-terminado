<template>
  <div class="bg-white min-h-screen pt-10">
    <div style="grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))" class="grid gap-4 max-w-[1185px] mx-auto">
      <TopicCard v-for="topic of topics" :key="topic.id" :topic="topic" />

    </div>
  </div>
</template>

<script setup>
import TopicCard from "../components/TopicCard/TopicCard.vue";
import supabase from "../db/db.js"
import { ref } from "vue"

const topics = ref()

async function getUser() {
  const { error, data } = await supabase.auth.getUser()

  if (error) {
    return console.log(error)
  }

  console.log(data)

}

async function getTopics() {
  const { error, data } = await supabase.from('topics').select()

  if (error) {
    return console.log(error)
  }

  topics.value = data
  console.log(data)
}


getUser()
getTopics()
</script>
