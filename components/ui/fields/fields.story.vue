<script setup lang="ts">
import InputField from "./InputField.vue";
import SelectField from "./SelectField.vue";
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
</script>
<template>
  <Story title="ui / Form Fields">
    <Variant title="Input">
      <InputField
        helper="Helper text"
        label="basic field"
        placeholder="Placeholder"
        :right-element="PhMagnifyingGlass"
      />
    </Variant>
    <Variant title="Select">
      <SelectField helper="Helper text" label="basic field" />
    </Variant>
  </Story>
</template>
