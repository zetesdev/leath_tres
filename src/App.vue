<script setup lang="ts">
import './App.css';
import BaseExperience from './components/BaseExperience.vue';
import PlierController from './components/PlierController.vue';
import ColorController from './components/ColorController.vue';
</script>

<template>
  <Suspense>
    <BaseExperience />
  </Suspense>
  <PlierController />
  <ColorController />
</template>
