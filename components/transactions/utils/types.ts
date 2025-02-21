import type { SelectRootProps } from "@ark-ui/vue/select";
import type { CATEGORIES, SORT_OPTIONS } from "./constants";

export type SortSelectRootProps = SelectRootProps<typeof SORT_OPTIONS>;

export type SortOptionsValues = (typeof SORT_OPTIONS)[number]["value"];

export type FilterCategories = [
  { label: "All Transactions"; value: "all_transactions" },
  ...typeof CATEGORIES,
];

export type FilterSelectRootProps = SelectRootProps<FilterCategories>;

export type FilterOptionsValues = FilterCategories[number]["value"];
