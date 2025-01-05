<script lang="ts" setup>
const financeStore = useFinanceStore();

const { pots } = storeToRefs(financeStore);

const overallBalance = computed(() => {
  return pots.value.reduce((acc, pot) => acc + pot.total, 0);
});

const limitedPotList = computed(() => pots.value.slice(0, 4));
</script>
<template>
  <!--Pots-->
  <OverviewSectionCard heading="pots" :link-props="{ label: 'See Details' }">
    <div class="grid gap-5 md:flex">
      <!--Total Saved-->
      <div
        class="flex w-full max-w-[247px] items-center gap-4 rounded-xl bg-beige-100 p-4"
      >
        <div>
          <IconPot class="text-[40px] text-green" />
        </div>
        <div class="grid gap-3">
          <div>Total Saved</div>
          <div class="text-preset-1">
            {{ formatCurrency(overallBalance) }}
          </div>
        </div>
      </div>
      <div class="grid w-full grid-cols-2 gap-4">
        <template v-for="{ name, total, theme } in limitedPotList">
          <div :style="{ '--pot-theme': theme }" class="flex gap-4">
            <div class="w-1 rounded-lg bg-[--pot-theme]" />
            <div class="grid gap-1">
              <div class="text-preset-5 text-grey-500">{{ name }}</div>
              <div class="text-preset-4-bold">{{ formatCurrency(total) }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </OverviewSectionCard>
</template>
