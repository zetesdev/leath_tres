import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useChoicesStore = defineStore('choices', () => {
  const open = ref(false);
  const scissors = ref(false);
  const screwdriver = ref(false);
  const activeColor = ref('0x27272a');

  const toggleOpen = () => {
    open.value = !open.value;
  };

  const toggleScissors = () => {
    scissors.value = !scissors.value;
  };

  const toggleScrewdriver = () => {
    screwdriver.value = !screwdriver.value;
  };

  const setColor = (color: string) => {
    const convertedColor = '0x' + color.substring(1); //conversion for Three.js setHex()
    activeColor.value = convertedColor;
  };

  return {
    open,
    scissors,
    screwdriver,
    activeColor,
    toggleOpen,
    toggleScissors,
    toggleScrewdriver,
    setColor,
  };
});
