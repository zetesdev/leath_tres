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
  <div
    class="flex w-full text-white font-light portrait:md:max-lg:p-2 portrait:md:max-lg:text-3xl lg:text-3xl"
  >
    <button
      :class="pliersClass"
      @click="toggleOpen"
      :disabled="scissors || screwdriver"
    >
      pliers
      <font-awesome-icon
        class="transform rotate-90"
        :icon="open ? faToggleOn : faToggleOff"
      />
    </button>
    <button :class="scissorsClass" @click="toggleScissors" :disabled="open">
      scissors
      <font-awesome-icon
        class="transform rotate-90"
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
        class="transform rotate-90"
        :icon="screwdriver ? faToggleOn : faToggleOff"
      />
    </button>
  </div>
</template>

<style scoped>
button {
  @apply flex items-center border-white border-2 p-1 mx-1 rounded-md z-20 lg:p-2 hover:scale-105;
}

.active {
}

.inactive {
  @apply bg-gray-300 text-gray-400 cursor-not-allowed opacity-75;
}
</style>
