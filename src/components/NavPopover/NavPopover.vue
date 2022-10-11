<template>
  <Popover class="relative">
    <PopoverButton>Topics</PopoverButton>

    <PopoverPanel class="absolute z-10 w-80 top-10">
      <div class="grid grid-cols-2 bg-white shadow-md p-10 gap-y-10 rounded-md">
        <a href="/analytics">Nextjs</a>
        <a href="/engagement">Nextjs</a>
        <a href="/security">Nextjs</a>
        <a href="/integrations">Nextjs</a>
      </div>

      <img src="/solutions.jpg" alt="" />
    </PopoverPanel>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>
