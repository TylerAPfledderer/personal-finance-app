<script lang="ts">
export type FieldWrapperProps = {
  label: string;
  helper?: string;
  errorMessage?: string;
};
</script>

<script lang="ts" setup>
import { FieldHelperText, FieldRoot, FieldLabel } from "@ark-ui/vue";

defineProps<FieldWrapperProps>();
</script>
<template>
  <FieldRoot class="grid gap-2">
    <FieldLabel class="text-preset-4-bold text-grey-500">
      {{ label }}
    </FieldLabel>
    <slot></slot>
    <FieldHelperText
      v-show="helper"
      class="justify-self-end text-preset-5 text-grey-500"
    >
      {{ helper }}
    </FieldHelperText>
    <span class="text-red">{{ errorMessage }}</span>
  </FieldRoot>
</template>
