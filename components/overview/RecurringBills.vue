<script lang="ts" setup>
// TODO Recurring needs to be created in the store
const recurringBills = ref([
  {
    theme: "--colors-green",
    label: "Paid Bills",
    amount: 190,
  },
  {
    theme: "--colors-yellow",
    label: "Total Upcoming",
    amount: 194.98,
  },
  {
    theme: "--colors-cyan",
    label: "Due Soon",
    amount: 59.98,
  },
]);
</script>
<template>
  <OverviewSectionCard
    heading="recurring bills"
    :link-props="{ label: 'see details' }"
  >
    <template v-for="section in recurringBills" :key="JSON.stringify(section)">
      <div
        :style="{ '--section-theme': `var(${section.theme})` }"
        class="flex justify-between rounded-lg border-s-4 border-[--section-theme] bg-beige-100 px-4 py-5"
      >
        <div class="text-grey-500">{{ section.label }}</div>
        <div class="text-preset-4-bold">
          {{ formatCurrency(section.amount) }}
        </div>
      </div>
    </template>
  </OverviewSectionCard>
</template>
