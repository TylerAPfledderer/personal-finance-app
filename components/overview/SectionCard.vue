<script lang="ts" setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

const props = defineProps<{
  heading: string;
  linkProps: {
    label: string;
  };
}>();

const transformedHeading = useChangeCase(props.heading, "capitalCase");

const capitalizedLabel = useChangeCase(props.linkProps.label, "capitalCase");
</script>
<template>
  <div
    class="flex flex-col gap-5 rounded-xl bg-white px-5 py-6 md:gap-8 md:p-8 lg:gap-5"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-preset-2">
        {{ transformedHeading }}
      </h2>
      <UiButton
        variant="tertiary"
        class="text-grey-500"
        :label="capitalizedLabel"
      />
    </div>
    <slot />
  </div>
</template>
