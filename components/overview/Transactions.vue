<script lang="ts" setup>
const financeStore = useFinanceStore();

const { transactions } = storeToRefs(financeStore);

const limitedTransactionList = computed(() => transactions.value.slice(0, 5));
</script>
<template>
  <OverviewSectionCard
    heading="Transactions"
    :link-props="{ label: 'View All' }"
  >
    <div class="grid gap-5">
      <template
        v-for="transaction in limitedTransactionList"
        :key="JSON.stringify(transaction)"
      >
        <div
          class="flex border-grey-100 [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:pb-5"
        >
          <div class="flex w-full items-center gap-4">
            <UiAvatar
              :size="{ initial: 'sm', md: 'md' }"
              :src="transaction.avatar"
            />
            <div class="text-preset-4-bold">{{ transaction.name }}</div>
          </div>
          <div class="grid min-w-[71px] gap-2">
            <div
              class="text-preset-4-bold"
              :class="transaction.amount > 0 && 'text-green'"
            >
              {{ formatCurrency(transaction.amount) }}
            </div>
            <div class="text-preset-5 text-grey-500">
              {{ formatDate(transaction.date) }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </OverviewSectionCard>
</template>
