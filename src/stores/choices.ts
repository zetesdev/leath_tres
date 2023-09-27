import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useChoicesStore = defineStore('choices', () => {
  const open = ref(false);
  const scissors = ref(false);
  const screwdriver = ref(false);

  const toggleOpen = () => {
    open.value = !open.value;
  };

  const toggleScissors = () => {
    scissors.value = !scissors.value;
  };

  const toggleScrewdriver = () => {
    screwdriver.value = !screwdriver.value;
  };

  return {
    open,
    scissors,
    screwdriver,
    toggleOpen,
    toggleScissors,
    toggleScrewdriver,
  };
});
