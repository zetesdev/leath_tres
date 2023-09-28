<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { useChoicesStore } from '../stores/choices.ts';

const {
  open,
  scissors,
  screwdriver,
  toggleOpen,
  toggleScissors,
  toggleScrewdriver,
} = toRefs(useChoicesStore());

const pliersClass = computed(() => {
  return {
    active: !scissors.value || !screwdriver.value,
    inactive: scissors.value || screwdriver.value,
  };
});

const scissorsClass = computed(() => {
  return {
    active: !open.value,
    inactive: open.value,
  };
});

const screwdriverClass = computed(() => {
  return {
    active: !open.value,
    inactive: open.value,
  };
});
</script>

<template>
  <div class="flexr">
    <button
      :class="pliersClass"
      @click="toggleOpen"
      :disabled="scissors || screwdriver"
    >
      pliers
    </button>
    <button :class="scissorsClass" @click="toggleScissors" :disabled="open">
      scissors
    </button>
    <button
      :class="screwdriverClass"
      @click="toggleScrewdriver"
      :disabled="open"
    >
      screwdriver
    </button>
  </div>
</template>

<style scoped>
button {
  @apply text-3xl p-5;
}

.active {
  @apply bg-red-500;
}

.inactive {
  @apply bg-red-200 text-gray-200;
}
</style>
