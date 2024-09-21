<script lang="ts">
export const inputClasses =
  "rounded-lg border border-beige-500 px-200 py-150 outline-none placeholder:text-beige-500 hover:border-grey-500 focus-visible:border focus-visible:border-grey-900";

export type InputProps = FieldInputProps & {
  leftElement?: Object;
  rightElement?: Object;
};
</script>
<script lang="ts" setup>
import { useFieldContext, type FieldInputProps } from "@ark-ui/vue";
import { cnBase } from "tailwind-variants";
import { mergeProps, type InputHTMLAttributes } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<InputProps>();

const model = defineModel<InputHTMLAttributes["value"]>();

const field = useFieldContext();
</script>
<template>
  <div class="grid [&>*]:[grid-area:1/1]">
    <span
      v-if="leftElement"
      class="z-10 self-center justify-self-start ps-200 text-preset-3"
    >
      <component :is="leftElement" />
    </span>
    <input
      v-bind="mergeProps(props, field.getInputProps(), $attrs)"
      v-model="model"
      :class="
        cnBase(
          inputClasses,
          !!props.leftElement && 'ps-500',
          !!props.rightElement && 'pe-500',
        )
      "
    />
    <span
      v-if="rightElement"
      class="z-10 self-center justify-self-end pe-200 text-preset-3"
    >
      <component :is="rightElement" />
    </span>
  </div>
</template>
