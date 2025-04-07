<script setup lang="ts">
import { useChangeCase } from "@vueuse/integrations/useChangeCase";

const financeStore = useFinanceStore();

const { balance } = storeToRefs(financeStore);

const capitalizeLabel = (label: string) => useChangeCase(label, "capitalCase");
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
          {{
            capitalizeLabel(label === "current" ? `${label} balance` : label)
          }}
        </div>
        <div class="text-preset-1">{{ formatCurrency(amount) }}</div>
      </div>
    </template>
  </div>
</template>
