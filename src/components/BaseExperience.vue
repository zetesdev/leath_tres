<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import MultiTool from './MultiTool.vue';
import MyEnviro from './MyEnviro.vue';
</script>

<template>
  <div class="w-[1024px] h-[512px]">
    <TresCanvas clear-color="white">
      <TresPerspectiveCamera :position="[0.5, 0.5, 0.5]" :look-at="[0, 0, 0]" />
      <OrbitControls />
      <Suspense>
        <MultiTool />
      </Suspense>
      <Suspense>
        <MyEnviro />
      </Suspense>
    </TresCanvas>
  </div>
</template>
