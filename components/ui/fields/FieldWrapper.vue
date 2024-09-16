<script lang="ts">
export type FieldWrapperProps = { label: string; helper?: string };
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
    <FieldHelperText class="justify-self-end text-preset-5 text-grey-500">
      {{ helper }}
    </FieldHelperText>
  </FieldRoot>
</template>
