
<template>
  <main class="min-h-screen bg-gray-100">
    <header
      class="bg-white h-12 border-b-2 border-t-neutral-800 flex items-center pl-5"
    >
      <NavPopover />
      <p class="pl-5">Manu</p>
      <p class="pl-5 cursor-pointer" @click="SignOut()">Sign Out</p>

    </header>
    <router-view></router-view>
  </main>
</template>

<script setup>
import NavPopover from "./components/NavPopover/NavPopover.vue";
import supabase from "./db/db"
import { useRouter } from "vue-router";

const router = useRouter()
async function SignOut() {
  await supabase.auth.signOut()
  router.push({
    name:'Home'
  })

}

</script>

<style scope>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
