<script setup lang="ts">
defineProps<{ bgColorClass: `bg-${string}`; label: string }>();
</script>
<template>
  <div class="flex flex-col gap-2">
    <div
      :class="[
        bgColorClass,
        bgColorClass === 'bg-white' && 'border-grey-900 border',
      ]"
      class="h-24 w-80 rounded-xl"
    />
    <div class="font-bold">{{ label }}</div>
  </div>
</template>
