<script setup>
    import { RouterLink } from 'vue-router';
    defineProps({
        to: String
    });
</script>

<template>
  <RouterLink :to="to" class="text-uppercase text-white font-bold bg-blue-600 block md:inline-block rounded-md py-2 px-3 shadow text-sm hover:bg-blue-800">
    <slot></slot>
  </RouterLink>
</template>

