<template>
  <main class="min-h-screen bg-gray-100">
    <header
      class="bg-white h-12 border-b-2 border-t-neutral-800 flex items-center pl-5"
    >
      <NavPopover />
      <p class="pl-5">Manu</p>
    </header>
    <router-view></router-view>
  </main>
</template>

<script setup>
import NavPopover from "./components/NavPopover/NavPopover.vue";
</script>

<style scoped>
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
