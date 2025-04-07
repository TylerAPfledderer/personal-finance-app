<script setup lang="ts">
import { IconSearch } from "#components";

const modal = defineModel<string>();
</script>
<template>
  <UiInputField
    v-model="modal"
    placeholder="Search transaction"
    :right-element="IconSearch"
  />
</template>
