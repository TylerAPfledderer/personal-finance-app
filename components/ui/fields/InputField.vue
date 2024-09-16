<script setup lang="ts">
import { mergeProps } from "vue";
import FieldWrapper, { type FieldWrapperProps } from "./FieldWrapper.vue";
import UIInput, { type InputProps } from "./primitives/Input.vue";

defineOptions({
  inheritAttrs: false,
});

type InputFieldProps = InputProps & FieldWrapperProps;

const { label, helper, ...inputProps } = defineProps<InputFieldProps>();

const model = defineModel();
</script>
<template>
  <FieldWrapper :label :helper>
    <UIInput v-bind="mergeProps(inputProps, $attrs)" v-model="model" />
  </FieldWrapper>
</template>
