import type { SortOptionsValues } from "~/components/transactions/utils/types";
import sortBy from "lodash/sortBy";

export const sortTransactions = (
  transactions: TransactionsType,
  sortType: SortOptionsValues,
) => {
  if (sortType === "latest") {
    return sortBy(transactions, "date").reverse();
  }

  if (sortType === "oldest") {
    return sortBy(transactions, "date");
  }

  if (sortType === "increase") {
    return sortBy(transactions, "name");
  }

  if (sortType === "decrease") {
    return sortBy(transactions, "name").reverse();
  }

  if (sortType === "highest") {
    return sortBy(transactions, "amount").reverse();
  }

  if (sortType === "lowest") {
    return sortBy(transactions, "amount");
  }
};
