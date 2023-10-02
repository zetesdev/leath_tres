<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, useProgress } from '@tresjs/cientos';

import MultiTool from './MultiTool.vue';
import MyEnviro from './MyEnviro.vue';

const { hasFinishLoading, progress } = await useProgress();
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full z-0">
    <div
      v-show="!hasFinishLoading"
      class="w-full h-full z-20 flex justify-center items-center text-white text-5xl"
    >
      <div class="text-center">Loading 3D model... {{ progress }} %</div>
    </div>
    <TresCanvas :alpha="true">
      <TresPerspectiveCamera :position="[0.5, 0.5, 0.5]" :look-at="[0, 0, 0]" />
      <OrbitControls
        :enable-pan="false"
        enable-damping
        :max-distance="1.5"
        :min-distance="0.7"
      />
      <Suspense>
        <MyEnviro />
      </Suspense>
      <Suspense>
        <MultiTool />
      </Suspense>
    </TresCanvas>
  </div>
</template>
