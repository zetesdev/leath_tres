<script setup lang="ts">
import { toRefs } from 'vue';
import { useChoicesStore } from '../stores/choices.ts';

const { setColor } = toRefs(useChoicesStore());

const buttons = [
  { color: '#365314' },
  { color: '#0369a1' },
  { color: '#b91c1c' },
  { color: '#27272a' },
  { color: '#c2410c' },
];
</script>

<template>
  <div class="flex justify-center w-full text-2xl mt-5">
    <button
      class="border-4 border-black w-10 h-10 rounded-xl mx-0.5"
      v-for="(button, index) in buttons"
      :key="index"
      :style="{ background: button.color }"
      @click="setColor(button.color)"
    ></button>
  </div>
</template>
