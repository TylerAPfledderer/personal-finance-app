<script setup lang="ts">
const label = "Placeholder";
</script>
<template>
  <Story title="ui / Button">
    <div class="flex flex-col items-start gap-8">
      <UiButton :label="label" />
      <UiButton :label="label" variant="secondary" />
      <UiButton :label="label" variant="tertiary" />
      <UiButton :label="label" variant="danger" />
    </div>
  </Story>
</template>
