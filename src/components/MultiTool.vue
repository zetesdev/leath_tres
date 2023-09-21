<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos';

const { scene } = await useGLTF('src/assets/tool_01.glb');
console.log(scene);
</script>

<template>
  <primitive :object="scene" />
</template>
