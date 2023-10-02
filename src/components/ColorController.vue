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
  <div class="flex justify-center w-full text-2xl mt-1 lg:mt-5">
    <button
      class="border-white border-2 w-8 h-8 mx-1 rounded-lg portrait:md:max-lg:rounded-xl portrait:md:max-lg:h-12 portrait:md:max-lg:w-12 lg:rounded-lg lg:w-12 lg:h-12 hover:scale-110"
      v-for="(button, index) in buttons"
      :key="index"
      :style="{ background: button.color }"
      @click="setColor(button.color)"
    ></button>
  </div>
</template>
