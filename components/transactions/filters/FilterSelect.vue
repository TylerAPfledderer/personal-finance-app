<script lang="ts" setup>
import { Select, type SelectRootProps } from "@ark-ui/vue";
import { selectStyles } from "../../ui/fields/primitives/Select.vue";

type FilterSelectRootProps = SelectRootProps<{ label: string; value: string }>;

const changedSort = defineModel<FilterSelectRootProps["modelValue"]>();

const isSmallerThanSm = inject("smallerThanSmKey") as Ref<boolean>;

defineProps<
  { label: string; icon: any } & Omit<FilterSelectRootProps, "children">
>();
</script>
<template>
  <Select.Root
    v-model="changedSort"
    :items
    class="relative flex w-max items-center gap-2"
  >
    <Select.Label class="text-grey-500 max-sm:sr-only">{{
      label
    }}</Select.Label>
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
        <icon />
      </Select.Trigger>
    </Select.Control>
    <Select.Positioner>
      <Select.Content
        :class="selectStyles().menu({ class: 'w-max px-250 py-150' })"
      >
        <div :class="selectStyles().itemGroup()">
          <template v-for="item in items" :key="JSON.stringify(item)">
            <Select.Item :item="item.value" :class="selectStyles().item()">
              <Select.ItemText :class="selectStyles().itemText()">
                {{ item.label }}
              </Select.ItemText>
            </Select.Item>
          </template>
        </div>
      </Select.Content>
    </Select.Positioner>
    <Select.HiddenSelect />
  </Select.Root>
</template>
