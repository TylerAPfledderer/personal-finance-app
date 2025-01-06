<script setup lang="ts">
import type { VNodeRef } from "vue";

const defaultLayoutAttrs = useAttrs();
const sidebarRef = ref<VNodeRef | null>(null);
const { height } = useElementSize(sidebarRef);
</script>
<template>
  <!--TODO: Fix from pushing the body out the screen and squashing containers-->
  <div class="flex" :style="{ '--sidebar-height': `${height}px` }">
    <Sidebar ref="sidebarRef" />
    <main
      class="grid w-full grid-rows-[min-content] gap-8 px-4 py-6 max-lg:mb-[--sidebar-height] md:px-10 md:py-8"
    >
      <h1 class="text-preset-1">
        {{ defaultLayoutAttrs.defaultLayoutLabel }}
      </h1>
      <slot></slot>
    </main>
  </div>
</template>
