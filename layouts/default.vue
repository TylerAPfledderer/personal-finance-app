<script setup lang="ts">
const defaultLayoutAttrs = useAttrs();
</script>
<template>
  <Sidebar />
  <main class="grid gap-8 px-4 py-6">
    <h1 class="text-preset-1">
      {{ defaultLayoutAttrs.defaultLayoutLabel }}
    </h1>
    <slot></slot>
  </main>
</template>
