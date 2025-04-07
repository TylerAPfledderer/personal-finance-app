<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isSmallerThanSm = breakpoints.smaller("sm");
provide("smallerThanSmKey", isSmallerThanSm);

const {
  currentCategoryValue,
  currentPage,
  currentPageList,
  currentSortValue,
  currentSearchValue,
  searchedList,
} = useTransactions();
</script>
<template>
  <div
    class="grid grid-rows-[min-content,1fr,min-content] gap-6 rounded-lg bg-white px-5 py-6 sm:p-8"
  >
    <div class="flex justify-between gap-6">
      <TransactionsFiltersSearchInput v-model="currentSearchValue" />
      <div class="flex w-min gap-6">
        <TransactionsFiltersSortBySelect v-model="currentSortValue" />
        <TransactionsFiltersFilterByCategory v-model="currentCategoryValue" />
      </div>
    </div>
    <div>
      <TransactionsListMobile :current-page :transactions="currentPageList" />
      <TransactionsList :current-page :transactions="currentPageList" />
    </div>
    <div class="pt-6">
      <UiPagination
        :page="currentPage"
        @page-change="(details) => (currentPage = details.page)"
        :count="searchedList.length"
      />
    </div>
  </div>
</template>
