<script lang="ts" setup>
import { Select } from "@ark-ui/vue";
import { selectStyles } from "../../ui/fields/primitives/Select.vue";
import type { SortSelectRootProps } from "../utils/types";
import { SORT_OPTIONS } from "../utils/constants";

const changedSort = defineModel<SortSelectRootProps["modelValue"]>();

const isSmallerThanSm = inject("smallerThanSmKey") as Ref<boolean>;
</script>
<template>
  <Select.Root v-model="changedSort" :items="SORT_OPTIONS" class="relative">
    <Select.Label class="max-sm:sr-only">Sort by</Select.Label>
    <Select.Control>
      <Select.Trigger
        v-if="!isSmallerThanSm"
        :class="selectStyles().trigger({ class: '!px-250' })"
      >
        <Select.ValueText />
        <Select.Indicator class="data-[state='open']:rotate-180">
          <IconCaretDown />
        </Select.Indicator>
      </Select.Trigger>
      <Select.Trigger v-else class="p-[3px]">
        <IconSortMobile />
      </Select.Trigger>
    </Select.Control>
    <Select.Positioner>
      <Select.Content
        :class="selectStyles().menu({ class: 'w-[114px] px-250 py-150' })"
      >
        <div :class="selectStyles().itemGroup()">
          <template v-for="{ label, value } in SORT_OPTIONS" :key="value">
            <Select.Item :item="value" :class="selectStyles().item()">
              <Select.ItemText :class="selectStyles().itemText()">{{
                label
              }}</Select.ItemText>
            </Select.Item>
          </template>
        </div>
      </Select.Content>
    </Select.Positioner>
    <Select.HiddenSelect />
  </Select.Root>
</template>
