<script setup lang="ts">
const defaultLayoutAttrs = useAttrs();
</script>
<template>
  <div class="flex">
    <Sidebar />
    <main class="grid w-full gap-8 px-4 py-6 md:px-10 md:py-8">
      <h1 class="text-preset-1">
        {{ defaultLayoutAttrs.defaultLayoutLabel }}
      </h1>
      <slot></slot>
    </main>
  </div>
</template>
