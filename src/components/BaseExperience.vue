<script setup lang="ts">
import MultiTool from './MultiTool.vue';
import MyEnviro from './MyEnviro.vue';

import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
</script>

<template>
  <div class="w-[1024px] h-[512px]">
    <TresCanvas clear-color="#82DBC5">
      <TresPerspectiveCamera :position="[1, 1, 1]" :look-at="[0, 0, 0]" />
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
