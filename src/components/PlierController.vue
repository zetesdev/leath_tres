<script setup lang="ts">
import { toRefs } from 'vue';
import { useChoicesStore } from '../stores/choices.ts';

const { toggleOpen, open } = toRefs(useChoicesStore());
</script>

<template>
  <button class="bg-red-500 text-3xl" @click="toggleOpen">
    {{ open ? 'CLOSE' : 'OPEN' }}
  </button>
</template>
