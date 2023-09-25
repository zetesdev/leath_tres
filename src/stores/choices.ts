import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useChoicesStore = defineStore('choices', () => {
  const open = ref(false);

  const toggleOpen = () => {
    open.value = !open.value;
  };

  return { open, toggleOpen };
});
