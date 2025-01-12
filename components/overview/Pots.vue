<script lang="ts" setup>
const financeStore = useFinanceStore();

const { pots } = storeToRefs(financeStore);

const overallBalance = computed(() => {
  return pots.value.reduce((acc, pot) => acc + pot.total, 0);
});

const limitedPotList = computed(() =>
  pots.value
    .slice(0, 4)
    .map(({ name, theme, total }) => ({ name, theme, amount: total })),
);
</script>
<template>
  <!--Pots-->
  <OverviewSectionCard heading="pots" :link-props="{ label: 'See Details' }">
    <div
      class="flex flex-col justify-between gap-5 justify-self-stretch md:flex-row lg:flex-col 2xl:flex-row"
    >
      <!--Total Saved-->
      <div class="flex w-full items-center gap-4 rounded-xl bg-beige-100 p-4">
        <div>
          <IconPot class="text-[40px] text-green" />
        </div>
        <div class="grid gap-3">
          <div>Total Saved</div>
          <div class="text-preset-1">
            {{ formatCurrency(overallBalance, "noDecimal") }}
          </div>
        </div>
      </div>
      <OverviewAmountGrid :list="limitedPotList" />
    </div>
  </OverviewSectionCard>
</template>
