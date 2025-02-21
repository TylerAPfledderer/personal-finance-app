import type { FilterCategories } from "./types";

export const SORT_OPTIONS = [
  { label: "Latest", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "increase" },
  { label: "Z to A", value: "decrease" },
  { label: "Highest", value: "highest" },
  { label: "Lowest", value: "lowest" },
] as const;

export const _CATERGORIES = [
  "Entertainment",
  "Bills",
  "Groceries",
  "Dining Out",
  "Transportation",
  "Personal Care",
  "Education",
  "Lifestyle",
  "Shopping",
  "General",
] as const;

export const CATEGORIES = [
  { label: "Entertainment", value: "entertainment" },
  { label: "Bills", value: "bills" },
  { label: "Groceries", value: "groceries" },
  { label: "Dining Out", value: "dining_out" },
  { label: "Transportation", value: "transportation" },
  { label: "Personal Care", value: "personal_care" },
  { label: "Education", value: "education" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Shopping", value: "shopping" },
  { label: "General", value: "general" },
] as const;

export const filterCategories: FilterCategories = [
  { label: "All Transactions", value: "all_transactions" },
  ...CATEGORIES,
];
