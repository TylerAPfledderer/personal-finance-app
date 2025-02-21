<script lang="ts" setup>
import type { SortSelectRootProps } from "../utils/types";
import { SORT_OPTIONS } from "../utils/constants";
import { IconSortMobile } from "#components";

const changedSort = defineModel<SortSelectRootProps["modelValue"]>();
</script>
<template>
  <TransactionsFiltersFilterSelect
    v-model="changedSort"
    :items="SORT_OPTIONS"
    label="Sort by"
    :icon="IconSortMobile"
  />
</template>
