<script setup lang="ts">
import {
  IconNavBudgets,
  IconNavOverview,
  IconNavPots,
  IconNavRecurringBills,
  IconNavTransactions,
} from "#components";
import type { SidebarItemProps } from "./SidebarItem.vue";
import defaultTheme from "tailwindcss/defaultTheme";
const lgBp = defaultTheme.screens["lg"];

const links: Array<Omit<SidebarItemProps, "minimized">> = [
  {
    icon: IconNavOverview,
    url: "/",
    label: "Overview",
  },
  {
    icon: IconNavTransactions,
    url: "/transactions",
    label: "Transactions",
  },
  /* Uncomment once pages are available */
  // {
  //   icon: IconNavBudgets,
  //   url: "/budgets",
  //   label: "Budgets",
  // },
  // {
  //   icon: IconNavPots,
  //   url: "/pots",
  //   label: "Pots",
  // },
  // {
  //   icon: IconNavRecurringBills,
  //   url: "/recurring-bills",
  //   label: "Recurring Bills",
  // },
];

const isLargerThanLg = useMediaQuery(`(min-width: ${lgBp})`);

const { isMinimized, toggleMinimizedMenu } = useSidebarMinimized();
</script>
<template>
  <div
    class="z-50 w-full bg-grey-900 text-grey-300 max-lg:fixed max-lg:bottom-0 max-lg:rounded-t-lg lg:flex lg:h-dvh lg:max-w-[300px] lg:flex-col lg:gap-6 lg:rounded-e-lg lg:pb-6"
    :class="isMinimized && isLargerThanLg && 'w-fit'"
  >
    <div
      class="flex px-8 py-10 max-lg:hidden"
      :class="isMinimized && 'justify-center'"
    >
      <img v-if="!isMinimized" src="/images/logo-large.svg" />
      <img v-else src="/images/logo-small.svg" />
    </div>
    <nav
      class="flex-1 px-4 py-0 max-lg:pt-2 md:px-10 lg:pe-6 lg:ps-0"
      :class="isMinimized && 'lg:pe-2'"
    >
      <ul class="inline-flex w-full max-lg:justify-between lg:grid">
        <SidebarItem
          v-for="link in links"
          :key="JSON.stringify(links)"
          v-bind="link"
          :minimized="isLargerThanLg && isMinimized"
        />
      </ul>
    </nav>
    <button
      class="flex items-center gap-4 px-8 py-4 text-preset-3 hover:text-grey-100 max-lg:hidden"
      :class="isMinimized && 'justify-center'"
      @click="toggleMinimizedMenu"
    >
      <IconMinimizeMenu
        class="!m-0 text-[1.5rem]"
        :class="isMinimized && 'rotate-180'"
      />
      <span v-show="!isMinimized && isLargerThanLg">Minimize Menu</span>
    </button>
  </div>
</template>
<style scoped></style>
