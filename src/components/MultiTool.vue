<script setup lang="ts">
import { useTexture } from '@tresjs/core';
import { useGLTF } from '@tresjs/cientos';

const customModel = await useGLTF('src/assets/tool_01.glb');

const customTextures = await useTexture([
  'src/assets/textures/T_cover_Normal.png',
  'src/assets/textures/T_metalBody_01_BaseColor.png',
  'src/assets/textures/T_metalBody_01_Normal.png',
  'src/assets/textures/T_MetalBody_02_Normal.png',
  'src/assets/textures/T_peseta_Normal.png',
  'src/assets/textures/T_pliers_Normal.png',
  'src/assets/textures/T_scissors_Normal.png',
]);

// customModel.nodes.SM_pliers_01.position.set(0, 0, 0.25);

customModel.materials.M_MetalBody_02.normalMap = customTextures[3];
customModel.materials.M_MetalBody_02.normalMap.flipY = false;
</script>

<template>
  <primitive :object="customModel.scene"></primitive>
</template>

<!-- const textures = useTexture({
  cover_01_normalMap: 'textures/T_cover_Normal.png',
  metalBody_01_baseColor: 'textures/T_metalBody_01_BaseColor.png',
  metalBody_01_normalMap: 'textures/T_metalBody_01_Normal.png',
  metalBody_02_normalMap: 'textures/T_MetalBody_02_Normal.png',
  peseta_normalMap: 'textures/T_peseta_Normal.png',
  pliers_normalMap: 'textures/T_pliers_Normal.png',
  scissors_normalMap: 'textures/T_scissors_Normal.png',
});

nodes.SM_cover_01.material.normalMap = textures.cover_01_normalMap;
nodes.SM_cover_01.material.normalMap.flipY = false;

nodes.SM_body_01.material.map = textures.metalBody_01_baseColor;
nodes.SM_body_01.material.map.flipY = false;
nodes.SM_body_01.material.normalMap = textures.metalBody_01_normalMap;
nodes.SM_body_01.material.normalMap.flipY = false;
nodes.SM_bodyTop_003.material.normalMap = textures.metalBody_02_normalMap;
nodes.SM_bodyTop_003.material.normalMap.flipY = false;
nodes.SM_screwdriver_01.material.normalMap = textures.peseta_normalMap;
nodes.SM_screwdriver_01.material.normalMap.flipY = false;
nodes.SM_pliers_01.material.normalMap = textures.pliers_normalMap;
nodes.SM_pliers_01.material.normalMap.flipY = false;
nodes.SM_scissors_01.material.normalMap = textures.scissors_normalMap;
nodes.SM_scissors_01.material.normalMap.flipY = false; -->
