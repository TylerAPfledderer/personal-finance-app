<script lang="ts" setup>
import { Pagination } from "@ark-ui/vue";
import { tv, cnBase } from "tailwind-variants";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import data from "../../../data.json";

const commonButtonClassStyles =
  "px-4 py-2 border border-beige-500 rounded-lg [&:not([disabled])]:hover:bg-beige-500 [&:not([disabled])]:hover:text-white";

const paginationStyles = tv({
  slots: {
    root: "flex w-full justify-between gap-3",
    trigger: cnBase(
      commonButtonClassStyles,
      "inline-flex items-center gap-4 [&:not([disabled])]:hover:bg-beige-500 [&:not([disabled])]:hover:text-white [&>svg]:text-beige-500 [&>svg]:[&:not([disabled])]:hover:text-white [&[disabled]]:cursor-not-allowed",
    ),
    item: cnBase(
      commonButtonClassStyles,
      "[&[data-selected]]:border-grey-900 [&[data-selected]]:bg-grey-900 [&[data-selected]]:text-white",
    ),
    ellipsis: cnBase(commonButtonClassStyles, ""),
  },
})();
</script>
<template>
  <Pagination.Root
    :class="paginationStyles.root()"
    :count="data.transactions.length"
    :page-size="10"
  >
    <Pagination.PrevTrigger
      :class="paginationStyles.trigger()"
      aria-label="Previous page"
    >
      <PhCaretLeft weight="fill" />
      <span class="max-sm:hidden"> Prev </span>
    </Pagination.PrevTrigger>
    <div class="flex gap-2">
      <Pagination.Context v-slot="pagination">
        <template v-for="(page, index) in pagination.pages">
          <Pagination.Item
            v-if="page.type === 'page'"
            :key="index"
            :value="page.value"
            :type="page.type"
            :class="paginationStyles.item()"
          >
            {{ page.value }}
          </Pagination.Item>
          <Pagination.Ellipsis
            v-else
            :key="'e' + index"
            :class="paginationStyles.ellipsis()"
            :index="index"
          >
            &#8230;
          </Pagination.Ellipsis>
        </template>
      </Pagination.Context>
    </div>
    <Pagination.NextTrigger
      :class="paginationStyles.trigger()"
      aria-label="Next page"
    >
      <span class="max-sm:hidden"> Next </span>
      <PhCaretRight weight="fill" />
    </Pagination.NextTrigger>
  </Pagination.Root>
</template>
