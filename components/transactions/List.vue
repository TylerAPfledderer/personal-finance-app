<script lang="ts" setup>
defineProps<{
  transactions: TransactionsType;
  currentPage: number;
}>();
</script>
<template>
  <div class="max-sm:hidden">
    <table class="w-full">
      <caption class="sr-only">
        transaction list page
        {{
          currentPage
        }}
      </caption>
      <thead>
        <tr
          class="border-b border-grey-100 text-grey-500 [&_>_th]:py-4 [&_>_th]:text-preset-4"
        >
          <th align="left">Recipient/Sender</th>
          <th align="left">Category</th>
          <th align="left">Transaction Date</th>
          <th align="right">Amount</th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="{ amount, avatar, category, date, name } in transactions"
        >
          <tr
            class="border-grey-100 [&:not(:last-of-type)]:border-b [&:not(:last-of-type)_>_td]:pb-3 [&_>_td]:pt-3 [&_>_td]:first-of-type:pt-4"
          >
            <td>
              <div class="flex items-center gap-4">
                <UiAvatar :src="avatar" />
                <div class="text-preset-4-bold">
                  {{ name }}
                </div>
              </div>
            </td>
            <td class="text-grey-500">{{ category }}</td>
            <td class="text-grey-500">{{ formatDate(date) }}</td>
            <td
              align="right"
              class="text-preset-4-bold"
              :class="amount > 0 && 'text-green'"
            >
              {{ formatCurrency(amount) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<style lang="postcss">
th,
td {
  @apply px-0;
}
</style>
