<script lang="ts" setup>
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";
import { Doughnut } from "vue-chartjs";
import { filterCategories } from "../transactions/utils/constants";

ChartJS.register(Tooltip, ArcElement);
const financeStore = useFinanceStore();

const windowStyle = ref<CSSStyleDeclaration>();

const { budgets } = storeToRefs(financeStore);

const graphLabels = budgets.value.map(({ category }) => category);
const graphDatasets = budgets.value.map(({ maximum }) => maximum);
const graphDataColors = computed(() =>
  // Pull the rendered CSS color variables to supply their hex values
  budgets.value.map(({ theme }) => windowStyle.value?.getPropertyValue(theme)),
);
const budgetMaximum = budgets.value.reduce(
  (acc, { maximum }) => acc + maximum,
  0,
);

const budgetCurr = computed(() =>
  budgets.value.reduce((acc, { current }) => acc + current, 0),
);

const limitedBudgetList = computed(() =>
  budgets.value.slice(0, 4).map(({ category, theme, maximum }) => ({
    name: filterCategories.find((cat) => cat.value === category)!.label,
    theme,
    amount: maximum,
  })),
);

onMounted(() => {
  windowStyle.value = window.getComputedStyle(document.body);
});
</script>
<template>
  <OverviewSectionCard heading="budgets" :link-props="{ label: 'See Details' }">
    <div class="flex size-full flex-col justify-center">
      <div class="grid gap-4 md:grid-cols-[1fr,100px]">
        <div class="relative mx-auto flex w-full max-w-[240px]">
          <Doughnut
            class="z-[1]"
            :data="{
              datasets: [
                {
                  data: graphDatasets,
                  backgroundColor: graphDataColors,
                },
              ],
              labels: graphLabels,
            }"
            :options="{
              cutout: '70%',
              plugins: {
                tooltip: {
                  callbacks: {
                    label: ({ raw }) => formatCurrency(raw as number),
                  },
                },
              },
            }"
          />
          <div class="absolute inset-0 grid place-items-center">
            <div class="grid justify-items-center gap-2">
              <div class="text-preset-1">
                {{ formatCurrency(budgetCurr, "noDecimal") }}
              </div>
              <div class="text-preset-5 text-grey-500">
                of {{ formatCurrency(budgetMaximum, "noDecimal") }} limit
              </div>
            </div>
          </div>
        </div>
        <OverviewAmountGrid class="md:grid-cols-1" :list="limitedBudgetList" />
      </div>
    </div>
  </OverviewSectionCard>
</template>
