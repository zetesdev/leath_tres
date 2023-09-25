<script setup lang="ts">
import { toRefs } from 'vue';
import { useChoicesStore } from '../stores/choices.ts';

const { toggleOpen, open } = toRefs(useChoicesStore());
</script>

<template>
  <div class="bg-red-500" @click="toggleOpen">
    {{ open ? 'CLOSE' : 'OPEN' }}
  </div>
</template>
