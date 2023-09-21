<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos';

// const { scene } = await useGLTF('src/assets/tool_01.glb');

const customModel = await useGLTF('src/assets/tool_01.glb');
console.log(customModel.nodes.SM_pliers_01.position);
customModel.nodes.SM_pliers_01.position.set(0, 0, 0.25);
</script>

<template>
  <primitive :object="customModel.scene"> </primitive>
</template>
