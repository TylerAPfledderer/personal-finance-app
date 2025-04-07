import chunk from "lodash/chunk";
import filter from "lodash/filter";

import {
  filterCategories,
  SORT_OPTIONS,
} from "~/components/transactions/utils/constants";
import { sortTransactions } from "~/components/transactions/utils/sortTransactions";
import type {
  FilterOptionsValues,
  SortOptionsValues,
} from "~/components/transactions/utils/types";

export const useTransactions = () => {
  const currentPage = ref(1);
  const financeStore = useFinanceStore();

  const { transactions } = storeToRefs(financeStore);

  const currentSortValue = ref<[SortOptionsValues]>([SORT_OPTIONS[0].value]);

  const currentCategoryValue = ref<[FilterOptionsValues]>([
    filterCategories[0].value,
  ]);

  const currentSearchValue = ref<string>("");

  const sortedList = computed(() =>
    sortTransactions(transactions.value, currentSortValue.value[0]),
  );

  const filteredList = computed(() =>
    filter(
      sortedList.value,
      (item) =>
        currentCategoryValue.value[0] === "all_transactions" ||
        item.category.includes(currentCategoryValue.value[0]),
    ),
  );

  const searchedList = computed(() =>
    filter(filteredList.value, (item) =>
      item.name.toLowerCase().includes(currentSearchValue.value.toLowerCase()),
    ),
  );

  const currentPageList = computed<TransactionsType>(() => {
    const transactionsWithHumanCat = searchedList.value.map((transaction) => ({
      ...transaction,
      category: filterCategories.find(
        (cat) => cat.value === transaction.category,
      )!.label,
    }));

    const transactionListChunk = chunk(transactionsWithHumanCat, 10);

    return transactionListChunk[currentPage.value - 1];
  });

  return {
    currentPage,
    currentSortValue,
    currentCategoryValue,
    currentSearchValue,
    searchedList,
    currentPageList,
  };
};
