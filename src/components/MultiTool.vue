<script setup lang="ts">
import { watch, toRefs } from 'vue';
import { Texture, MeshStandardMaterial } from 'three';
import { useTexture } from '@tresjs/core';
import { useGLTF } from '@tresjs/cientos';
import anime from 'animejs';
import { useChoicesStore } from '../stores/choices.ts';

const { open } = toRefs(useChoicesStore());

const customModel = await useGLTF('src/assets/tool_01.glb');

const pliersValues = {
  upperHandle: 0,
  upperPlier: 0,
  lowerHandle: 0,
};

function animateValue(toOpen: boolean) {
  const targetUpper = toOpen ? 2.7 : 0;
  const targetLower = toOpen ? -2.7 : 0;
  const targetPlier = toOpen ? 0.15 : 0;

  anime({
    targets: pliersValues,
    upperHandle: targetUpper,
    lowerHandle: targetLower,
    upperPlier: targetPlier,
    duration: 1500,
    easing: 'easeInOutQuad',
    update: function () {
      customModel.nodes.SM_cover_01.rotation.z = pliersValues.upperHandle;
      customModel.nodes.SM_body_01.rotation.z = pliersValues.lowerHandle;
      customModel.nodes.SM_pliers_01.rotation.z = pliersValues.upperPlier;
      customModel.nodes.SM_pliers_02.rotation.z = -pliersValues.upperPlier;
    },
  });
}

watch(open, (newVal) => {
  animateValue(newVal);
});

console.log(customModel.nodes);

//TEXTURES LOADING
const customTextures = (await useTexture([
  'src/assets/textures/T_cover_Normal.png',
  'src/assets/textures/T_metalBody_01_BaseColor.png',
  'src/assets/textures/T_metalBody_01_Normal.png',
  'src/assets/textures/T_MetalBody_02_Normal.png',
  'src/assets/textures/T_peseta_Normal.png',
  'src/assets/textures/T_pliers_Normal.png',
  'src/assets/textures/T_scissors_Normal.png',
])) as Texture[];

if (customModel.materials.M_cover instanceof MeshStandardMaterial) {
  customModel.materials.M_cover.normalMap = customTextures[0];
  customModel.materials.M_cover.normalMap.flipY = false;
}

if (customModel.materials.M_metalBody_01 instanceof MeshStandardMaterial) {
  customModel.materials.M_metalBody_01.map = customTextures[1];
  customModel.materials.M_metalBody_01.map.flipY = false;
  customModel.materials.M_metalBody_01.normalMap = customTextures[2];
  customModel.materials.M_metalBody_01.normalMap.flipY = false;
}

if (customModel.materials.M_MetalBody_02 instanceof MeshStandardMaterial) {
  customModel.materials.M_MetalBody_02.normalMap = customTextures[3];
  customModel.materials.M_MetalBody_02.normalMap.flipY = false;
}

if (customModel.materials.M_peseta instanceof MeshStandardMaterial) {
  customModel.materials.M_peseta.normalMap = customTextures[4];
  customModel.materials.M_peseta.normalMap.flipY = false;
}

if (customModel.materials.M_pliers instanceof MeshStandardMaterial) {
  customModel.materials.M_pliers.normalMap = customTextures[5];
  customModel.materials.M_pliers.normalMap.flipY = false;
}

if (customModel.materials.M_scissors instanceof MeshStandardMaterial) {
  customModel.materials.M_scissors.normalMap = customTextures[6];
  customModel.materials.M_scissors.normalMap.flipY = false;
}
</script>

<template>
  <primitive :object="customModel.scene"></primitive>
</template>
