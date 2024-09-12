<script setup lang="ts">
import UIButton from "./index.vue";

const label = "Placeholder";
</script>
<template>
  <Story title="ui / Button">
    <div class="gap-8 flex flex-col items-start">
      <UIButton :label="label" />
      <UIButton :label="label" variant="secondary" />
      <UIButton :label="label" variant="tertiary" />
      <UIButton :label="label" variant="danger" />
    </div>
  </Story>
</template>
