<script lang="ts" setup>
defineProps<{
  transactions: TransactionsType;
  currentPage: number;
}>();
</script>
<template>
  <ul
    class="grid gap-4 sm:hidden"
    :aria-label="`transactions page ${currentPage}`"
  >
    <template
      v-for="transactionItem in transactions"
      :key="JSON.stringify(transactionItem)"
    >
      <li
        class="flex items-center justify-between border-grey-100 [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:pb-4"
      >
        <div class="flex items-center gap-3">
          <div>
            <UiAvatar size="sm" :src="transactionItem.avatar" />
          </div>
          <div class="grid gap-1">
            <div class="text-preset-4-bold">
              {{ transactionItem.name }}
            </div>
            <div class="text-grey-500">{{ transactionItem.category }}</div>
          </div>
        </div>

        <div class="grid justify-items-end gap-1 text-right">
          <div
            class="text-preset-4-bold"
            :class="transactionItem.amount > 0 && 'text-green'"
          >
            {{ formatCurrency(transactionItem.amount) }}
          </div>
          <div class="text-grey-500">
            {{ formatDate(transactionItem.date) }}
          </div>
        </div>
      </li>
    </template>
  </ul>
</template>
