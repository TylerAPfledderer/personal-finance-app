<template>
  <div class="contents">
    <OverviewBalanceGroup />
    <div class="grid gap-4 lg:grid-cols-2 lg:grid-rows-3">
      <OverviewPots />
      <OverviewTransactions class="lg:row-[2_/_4]" />
      <OverviewBudgets class="lg:row-[1_/_3]" />
      <OverviewRecurringBills />
    </div>
  </div>
</template>
