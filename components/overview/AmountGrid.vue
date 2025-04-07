<script lang="ts" setup>
type AmountGridProps = {
  list: { name: string; amount: number; theme: string }[];
};

defineProps<AmountGridProps>();
</script>
<template>
  <div class="grid w-full grid-cols-2 gap-4">
    <template v-for="item in list" :key="JSON.stringify(item)">
      <div :style="{ '--pot-theme': `var(${item.theme})` }" class="flex gap-4">
        <div class="w-1 rounded-lg bg-[--pot-theme]" />
        <div class="grid gap-1">
          <div class="text-preset-5 text-grey-500">{{ item.name }}</div>
          <div class="text-preset-4-bold">
            {{ formatCurrency(item.amount, "noDecimal") }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
