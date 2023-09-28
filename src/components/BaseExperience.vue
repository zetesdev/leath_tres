<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, useProgress } from '@tresjs/cientos';

import MultiTool from './MultiTool.vue';
import MyEnviro from './MyEnviro.vue';

const { hasFinishLoading, progress } = await useProgress();
</script>

<template>
  <div class="w-full h-[75vh]">
    <div
      v-show="!hasFinishLoading"
      class="bg-blue-500 t-0 l-0 w-full h-full z-20 flex justify-center items-center text-black font-mono"
    >
      <div class="w-200px">
        Loading 3D model... {{ progress }} %
        <i class="i-ic-twotone-catching-pokemon animate-rotate-in"></i>
      </div>
    </div>
    <TresCanvas clear-color="white">
      <TresPerspectiveCamera :position="[0.5, 0.5, 0.5]" :look-at="[0, 0, 0]" />
      <OrbitControls enable-damping :max-distance="1.5" :min-distance="0.7" />
      <Suspense>
        <MyEnviro />
      </Suspense>
      <Suspense>
        <MultiTool />
      </Suspense>
    </TresCanvas>
  </div>
</template>
