<script setup lang="ts">
import capitalize from "lodash/capitalize";

const financeStore = useFinanceStore();

const { balance } = storeToRefs(financeStore);
</script>
<template>
  <!--Balance Group-->
  <div class="grid gap-x-6 gap-y-3 md:flex">
    <template
      v-for="[label, amount] of Object.entries(balance)"
      :key="JSON.stringify([label, amount])"
    >
      <div
        class="grid h-min w-full gap-3 rounded-xl p-5"
        :class="label === 'current' ? 'bg-grey-900 text-white' : 'bg-white'"
      >
        <div>
          {{ capitalize(label === "current" ? `${label} balance` : label) }}
        </div>
        <div class="text-preset-1">{{ formatCurrency(amount) }}</div>
      </div>
    </template>
  </div>
</template>
