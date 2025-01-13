<template>
  <div class="contents">
    <OverviewBalanceGroup />
    <div
      class="grid-cascade grid gap-4 xl:grid-cols-2 2xl:grid-cols-[1.5fr,1fr] 2xl:gap-6"
    >
      <OverviewPots />
      <OverviewTransactions />
      <OverviewBudgets />
      <OverviewRecurringBills />
    </div>
  </div>
</template>
<style lang="postcss">
.grid-cascade {
  & > :nth-child(1) {
    @apply row-[1/2] xl:order-1;
  }

  & > :nth-child(2) {
    @apply xl:order-3 xl:row-[2/6];
  }

  & > :nth-child(3) {
    @apply xl:order-2 xl:col-[2] xl:row-[1/5];
  }

  & > :nth-child(4) {
    @apply xl:order-4 xl:col-[2] xl:row-[5/6];
  }
}
</style>
