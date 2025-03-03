<script setup lang="ts">
import type { VNodeRef } from "vue";

const defaultLayoutAttrs = useAttrs() as { defaultLayoutLabel: string };
const sidebarRef = ref<VNodeRef | null>(null);
const { height } = useElementSize(sidebarRef);

const { isMinimized } = useSidebarMinimized();
</script>
<template>
  <div
    :style="{ '--sidebar-height': `${height}px` }"
    class="grid"
    :class="
      isMinimized
        ? 'lg:grid-cols-[max-content,1fr]'
        : 'lg:grid-cols-[max(300px),1fr]'
    "
  >
    <Sidebar ref="sidebarRef" />
    <main
      class="grid grid-cols-subgrid grid-rows-[min-content,_1fr] gap-8 px-4 py-6 max-lg:mb-[--sidebar-height] md:px-10 md:py-8 lg:h-[100vh] lg:overflow-y-scroll"
    >
      <h1 class="py-2 text-preset-1">
        {{ defaultLayoutAttrs.defaultLayoutLabel }}
      </h1>
      <slot></slot>
    </main>
  </div>
</template>
