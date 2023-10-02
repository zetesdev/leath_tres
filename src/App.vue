<script setup lang="ts">
import './App.css';
import BaseExperience from './components/BaseExperience.vue';
import PlierController from './components/PlierController.vue';
import ColorController from './components/ColorController.vue';
import AboutDev from './components/AboutDev.vue';
</script>

<template>
  <AboutDev />
  <Suspense>
    <BaseExperience />
  </Suspense>
  <div
    class="flex flex-col items-center fixed z-20 bottom-3 lg:bottom-5 left-1/2 -translate-x-1/2"
  >
    <PlierController />
    <ColorController />
  </div>
</template>
