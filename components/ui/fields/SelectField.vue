<script setup lang="ts">
import { mergeProps } from "vue";
import FieldWrapper, { type FieldWrapperProps } from "./FieldWrapper.vue";
import UISelect, { type SelectProps } from "./primitives/Select.vue";

defineOptions({
  inheritAttrs: false,
});

type InputFieldProps = SelectProps & FieldWrapperProps;

const { label, helper, ...selectProps } = defineProps<InputFieldProps>();

const model = defineModel<string[]>();
</script>
<template>
  <FieldWrapper :label :helper>
    <UISelect v-bind="mergeProps(selectProps, $attrs)" v-model="model" />
  </FieldWrapper>
</template>
