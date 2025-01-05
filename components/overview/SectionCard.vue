<script lang="ts" setup>
import upperCase from "lodash/upperFirst";
import capitalize from "lodash/capitalize";

defineProps<{
  heading: string;
  linkProps: {
    label: string;
  };
}>();
</script>
<template>
  <div class="grid gap-5 rounded-xl bg-white px-5 py-6">
    <div class="flex items-center justify-between">
      <h2 class="text-preset-2">{{ capitalize(heading) }}</h2>
      <UiButton
        variant="tertiary"
        class="text-grey-500"
        :label="upperCase(linkProps.label)"
      />
    </div>
    <slot></slot>
  </div>
</template>
