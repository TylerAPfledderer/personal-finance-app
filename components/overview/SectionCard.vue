<script lang="ts" setup>
import upperCase from "lodash/upperFirst";
import capitalize from "lodash/capitalize";
import {} from "lodash";

defineProps<{
  heading: string;
  linkProps: {
    label: string;
  };
}>();
</script>
<template>
  <div class="grid gap-5 rounded-xl bg-white px-5 py-6 md:gap-8 md:p-8">
    <div class="flex items-center justify-between">
      <h2 class="text-preset-2">
        {{
          heading
            .split(" ")
            .map((string) => capitalize(string))
            .join(" ")
        }}
      </h2>
      <UiButton
        variant="tertiary"
        class="text-grey-500"
        :label="
          linkProps.label
            .split(' ')
            .map((string) => capitalize(string))
            .join(' ')
        "
      />
    </div>
    <slot></slot>
  </div>
</template>
