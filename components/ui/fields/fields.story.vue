<script setup lang="ts">
import { IconSearch } from "#components";
</script>
<template>
  <Story title="ui / Form Fields">
    <Variant title="Input">
      <UiInputField
        helper="Helper text"
        label="basic field"
        placeholder="Placeholder"
        :right-element="IconSearch"
      />
    </Variant>
    <Variant title="Select">
      <UiSelectField helper="Helper text" label="basic field" />
    </Variant>
  </Story>
</template>
