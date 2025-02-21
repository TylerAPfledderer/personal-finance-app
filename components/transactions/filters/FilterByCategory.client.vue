<script lang="ts" setup>
import type { FilterSelectRootProps } from "../utils/types";
import { filterCategories } from "../utils/constants";
import { IconFilterMobile } from "#components";

const changedCategory = defineModel<FilterSelectRootProps["modelValue"]>();
</script>
<template>
  <TransactionsFiltersFilterSelect
    v-model="changedCategory"
    :items="filterCategories"
    label="Category"
    :icon="IconFilterMobile"
  />
</template>
