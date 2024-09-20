<script setup lang="ts">
import { tv } from "tailwind-variants";

const buttonStyles = tv({
  base: "rounded-lg border border-[current] p-4 font-bold",
  variants: {
    variant: {
      primary: "bg-grey-900 text-white hover:bg-grey-500",
      secondary:
        "border-[transparent] bg-beige-100 hover:border-beige-500 hover:bg-white",
      tertiary:
        "inline-flex items-center gap-3 border-[transparent] p-0 hover:text-grey-500",
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
      <IconCaretRight />
    </div>
  </button>
</template>
