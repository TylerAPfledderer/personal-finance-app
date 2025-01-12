<script lang="ts" setup>
defineProps<{ list: { name: string; amount: number; theme: string }[] }>();
</script>
<template>
  <div class="grid w-full grid-cols-2 gap-4">
    <template v-for="{ name, amount, theme } in list">
      <div :style="{ '--pot-theme': `var(${theme})` }" class="flex gap-4">
        <div class="w-1 rounded-lg bg-[--pot-theme]" />
        <div class="grid gap-1">
          <div class="text-preset-5 text-grey-500">{{ name }}</div>
          <div class="text-preset-4-bold">
            {{ formatCurrency(amount, "noDecimal") }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
