<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
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
  <div class="flex justify-center w-full">
    <button
      :class="pliersClass"
      @click="toggleOpen"
      :disabled="scissors || screwdriver"
    >
      pliers
      <font-awesome-icon
        class="text-3xl"
        :icon="open ? faToggleOn : faToggleOff"
      />
    </button>
    <button :class="scissorsClass" @click="toggleScissors" :disabled="open">
      scissors
      <font-awesome-icon
        class="text-3xl"
        :icon="scissors ? faToggleOn : faToggleOff"
      />
    </button>
    <button
      :class="screwdriverClass"
      @click="toggleScrewdriver"
      :disabled="open"
    >
      screwdriver
      <font-awesome-icon
        class="text-3xl"
        :icon="screwdriver ? faToggleOn : faToggleOff"
      />
    </button>
  </div>
</template>

<style scoped>
button {
  @apply text-2xl p-5 mx-2 rounded-lg z-20;
}

.active {
  @apply bg-red-500;
}

.inactive {
  @apply bg-red-200 text-gray-200;
}
</style>
