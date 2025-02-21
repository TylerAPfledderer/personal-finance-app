<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import chunk from "lodash/chunk";
import filter from "lodash/filter";
import { SORT_OPTIONS } from "~/components/transactions/utils/constants";
import { sortTransactions } from "~/components/transactions/utils/sortTransactions";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isSmallerThanSm = breakpoints.smaller("sm");
provide("smallerThanSmKey", isSmallerThanSm);

const currentPage = ref(1);
const financeStore = useFinanceStore();

const { transactions } = storeToRefs(financeStore);

const currentSortValue = ref([SORT_OPTIONS[0].value]);

const filteredValue = ref("");

const sortedList = computed(() =>
  sortTransactions(transactions.value, currentSortValue.value[0]),
);

const filteredList = computed(() =>
  filter(sortedList.value, (item) => {
    return item.name.toLowerCase().includes(filteredValue.value);
  }),
);

const currentPageList = computed(() => {
  const transactionListChunk = chunk(filteredList.value, 10);

  return transactionListChunk[currentPage.value - 1];
});
</script>
<template>
  <div class="grid gap-6 rounded-lg bg-white px-5 py-6 sm:p-8">
    <div>
      <TransactionsFiltersSortBySelect v-model="currentSortValue" />
    </div>
    <TransactionsListMobile :current-page :transactions="currentPageList" />
    <TransactionsList :current-page :transactions="currentPageList" />
    <div class="pt-6">
      <UiPagination
        :page="currentPage"
        @page-change="(details) => (currentPage = details.page)"
        :count="filteredList.length"
      />
    </div>
  </div>
</template>
