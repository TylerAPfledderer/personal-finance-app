<script setup lang="ts">
import { mergeProps } from "vue";
import FieldWrapper, {
  type FieldWrapperProps,
} from "./FieldWrapper.client.vue";
import UIInput, { type InputProps } from "./primitives/Input.vue";

defineOptions({
  inheritAttrs: false,
});

type InputFieldProps = InputProps & FieldWrapperProps;

const { label, helper, errorMessage, ...inputProps } =
  defineProps<InputFieldProps>();

const model = defineModel();
</script>
<template>
  <FieldWrapper :label :helper :error-message>
    <UIInput v-bind="mergeProps(inputProps, $attrs)" v-model="model" />
  </FieldWrapper>
</template>
