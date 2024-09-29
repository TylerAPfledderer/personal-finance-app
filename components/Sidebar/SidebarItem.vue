<script lang="ts">
export type SidebarItemProps = {
  url: `/${string | undefined}`;
  label: Capitalize<string>;
  icon: Object;
  minimized: boolean;
};
</script>
<script setup lang="ts">
defineProps<SidebarItemProps>();
</script>
<template>
  <li class="flex-1 text-center max-lg:max-w-[104px]">
    <NuxtLink
      :to="url"
      :aria-label="label"
      class="grid justify-items-center gap-4 border-[transparent] pb-3 pt-2 hover:text-grey-100 max-lg:border-b-4 lg:flex lg:border-s-4 lg:px-8 lg:py-4"
      :class="{ 'router-link-active': url === '/' }"
    >
      <component :is="icon" class="!mb-0 text-[18px]" />

      <span v-show="!minimized" class="text-preset-5-bold max-md:hidden">
        {{ label }}
      </span>
    </NuxtLink>
  </li>
</template>
<style lang="postcss" scoped>
/* NuxtLink default class when link is active */
.router-link-active {
  @apply border-green bg-white max-lg:rounded-t-lg lg:rounded-e-lg [&_>_span]:text-grey-900 [&_>_svg]:text-green;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
