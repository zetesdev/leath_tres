<script setup lang="ts">
import BaseExperience from './components/BaseExperience.vue';
import PlierController from './components/PlierController.vue';
</script>

<template>
  <Suspense>
    <BaseExperience />
  </Suspense>
  <PlierController />
</template>
