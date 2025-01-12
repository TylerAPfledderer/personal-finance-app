<script setup lang="ts">
import type { VNodeRef } from "vue";

const defaultLayoutAttrs = useAttrs();
const sidebarRef = ref<VNodeRef | null>(null);
const { height } = useElementSize(sidebarRef);
</script>
<template>
  <!--TODO: Fix from pushing the body out the screen and squashing containers-->
  <div
    :style="{ '--sidebar-height': `${height}px` }"
    class="grid lg:grid-cols-[minmax(max-content,300px),1fr]"
  >
    <Sidebar ref="sidebarRef" />
    <main
      class="grid grid-cols-subgrid gap-8 px-4 py-6 max-lg:mb-[--sidebar-height] md:px-10 md:py-8 lg:h-[100vh] lg:overflow-y-scroll"
    >
      <h1 class="text-preset-1">
        {{ defaultLayoutAttrs.defaultLayoutLabel }}
      </h1>
      <slot></slot>
    </main>
  </div>
</template>
