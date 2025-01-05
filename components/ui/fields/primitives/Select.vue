<script lang="ts">
import type { SelectRootProps } from "@ark-ui/vue";
import { ref } from "vue";
import { watch } from "vue";

export type SelectProps = Omit<SelectRootProps<string | object>, "items">;

const selectStyles = tv({
  slots: {
    trigger: cnBase(
      inputClasses,
      "inline-flex w-full items-center justify-between gap-8 ps-500",
    ),
    menu: "overflow-visible rounded-lg bg-white p-150 shadow-[0px_4px_24px_0_rgba(0,0,0,0.25)]",
  },
});

export const selectTriggerStyles = selectStyles().trigger();
</script>

<script setup lang="ts">
import { Select } from "@ark-ui/vue";
import { cnBase, tv } from "tailwind-variants";
import { colorTags } from "../../../../utils/color-tags";

import { inputClasses } from "./Input.vue";

defineProps<SelectProps>();

const model = defineModel<string[]>();

const selectedItem = ref<(typeof colorTags)[number]>();

watch(model, (value) => {
  if (value) {
    selectedItem.value = colorTags.find((tag) => tag.value === value[0]);
  }
});
</script>
<template>
  <Select.Root
    :items="colorTags"
    :item-to-string="(item) => item.name"
    v-model="model"
    :positioning="{ sameWidth: true, overflowPadding: 0 }"
  >
    <Select.Control>
      <div class="grid [&>*]:[grid-area:1/1]">
        <span
          :style="{ '--circle-color': selectedItem?.hueCSSVar }"
          :class="
            cnBase(
              'z-10 self-center justify-self-start ps-200 text-preset-3',
              'text-[--circle-color]',
            )
          "
        >
          <IconCircleFill />
        </span>

        <Select.Trigger :class="selectTriggerStyles">
          <Select.ValueText placeholder="Select a Color" />
          <Select.Indicator class="data-[state='open']:rotate-180">
            <IconCaretDown />
          </Select.Indicator>
        </Select.Trigger>
      </div>
    </Select.Control>
    <Teleport to="body">
      <Select.Positioner>
        <Select.Content :class="selectStyles().menu()">
          <div class="grid gap-150">
            <template
              v-for="(item, itemIdx) in colorTags"
              :key="JSON.stringify(item)"
            >
              <div v-if="itemIdx !== 0" class="border-b border-grey-100" />
              <Select.Item
                :item="item"
                class="inline-flex cursor-pointer items-center gap-150 [&[data-disabled]]:cursor-not-allowed"
              >
                <IconCircleFill
                  :style="{ '--circle-option-color': item.hueCSSVar }"
                  :class="
                    cnBase(
                      'text-[--circle-option-color]',
                      item.disabled && 'opacity-15',
                    )
                  "
                />
                <Select.ItemText :class="item.disabled && 'text-grey-500'">{{
                  item.name
                }}</Select.ItemText>
                <div class="ms-auto">
                  <Select.ItemIndicator v-if="!item.disabled">
                    <IconBillPaid weight="fill" class="text-green" />
                  </Select.ItemIndicator>
                  <span v-else class="text-grey-500">Already used</span>
                </div>
              </Select.Item>
            </template>
          </div>
        </Select.Content>
      </Select.Positioner>
    </Teleport>
    <Select.HiddenSelect />
  </Select.Root>
</template>
