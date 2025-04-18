import chunk from "lodash/chunk";

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
  // TODO update current page when filter or sort is deployed where if the user is on a page that no longer exists, send user back to the first page.
  const currentPage = ref(1);
  const financeStore = useFinanceStore();

  const { transactions } = storeToRefs(financeStore);

  /**
   * Sets the current sort type. There should only be one value supplied in the array.
   *
   * @default ["latest"]
   */
  const currentSortValue = ref<[SortOptionsValues]>([SORT_OPTIONS[0].value]);

  /**
   * The current selected category type. There should only be one value supplied in the array.
   *
   * @default ["all_transactions"]
   */
  const currentCategoryValue = ref<[FilterOptionsValues]>([
    filterCategories[0].value,
  ]);

  /**
   * Used for filtering with text input.
   *
   * This search value is only applied to recipient/sender name.
   */
  const currentSearchValue = ref<string>("");

  const sortedList = computed(() =>
    sortTransactions(transactions.value, currentSortValue.value[0]),
  );

  const filteredList = useArrayFilter(
    sortedList,
    (item) =>
      currentCategoryValue.value[0] === "all_transactions" ||
      item.category.includes(currentCategoryValue.value[0]),
  );

  const searchedList = useArrayFilter(filteredList, (item) =>
    item.name.toLowerCase().includes(currentSearchValue.value.toLowerCase()),
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
