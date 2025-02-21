import type { SelectRootProps } from "@ark-ui/vue/select";
import type { SORT_OPTIONS } from "./constants";

export type SortSelectRootProps = SelectRootProps<typeof SORT_OPTIONS>;

export type SortOptionsValues = (typeof SORT_OPTIONS)[number]["value"];
