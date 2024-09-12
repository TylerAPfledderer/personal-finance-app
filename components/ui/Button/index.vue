<script setup lang="ts">
import { tv } from "tailwind-variants";
import { PhCaretRight } from "@phosphor-icons/vue";

const buttonStyles = tv({
  base: "p-4 rounded-lg border border-[current] font-bold",
  variants: {
    variant: {
      primary: "bg-grey-900 text-white hover:bg-grey-500",
      secondary:
        "border-[transparent] bg-beige-100 hover:border-beige-500 hover:bg-white",
      tertiary:
        "p-0 gap-3 inline-flex items-center border-[transparent] hover:text-grey-500",
      danger: "bg-red text-white hover:bg-red/80",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = {
  variant?: "danger" | "primary" | "secondary" | "tertiary";
  label: string;
};

const props = defineProps<ButtonProps>();
</script>
<template>
  <button :class="buttonStyles({ variant: props.variant })">
    <span>{{ label }}</span>
    <div v-if="props.variant === 'tertiary'">
      <PhCaretRight weight="fill" />
    </div>
  </button>
</template>
