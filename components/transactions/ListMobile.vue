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
    <template v-for="{ amount, avatar, category, date, name } in transactions">
      <li
        class="flex items-center justify-between border-grey-100 [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:pb-4"
      >
        <div class="flex items-center gap-3">
          <div>
            <UiAvatar size="sm" :src="avatar" />
          </div>
          <div class="grid gap-1">
            <div class="text-preset-4-bold">
              {{ name }}
            </div>
            <div class="text-grey-500">{{ category }}</div>
          </div>
        </div>

        <div class="grid justify-items-end gap-1 text-right">
          <div class="text-preset-4-bold" :class="amount > 0 && 'text-green'">
            {{ formatCurrency(amount) }}
          </div>
          <div class="text-grey-500">{{ formatDate(date) }}</div>
        </div>
      </li>
    </template>
  </ul>
</template>
