<script setup lang="ts">
import { Avatar, type AvatarImageProps, type Optional } from "@ark-ui/vue";
import { tv } from "tailwind-variants";
import { mergeProps } from "vue";

defineOptions({
  inheritAttrs: false,
});

const avatarStyles = tv(
  {
    base: "rounded-full",
    variants: {
      size: {
        md: "size-10",
        sm: "size-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
  {
    responsiveVariants: true,
  },
);

const { size, ...props } = defineProps<
  AvatarImageProps & {
    // This is a hack because `Variant` type cannot be generated properly
    size?:
      | "sm"
      | "md"
      | Partial<Record<"initial" | "md", "sm" | "md" | undefined>>;
  }
>();
</script>
<template>
  <Avatar.Root aria-hidden>
    <Avatar.Fallback />
    <Avatar.Image
      v-bind="mergeProps(props, $attrs)"
      :class="avatarStyles({ size })"
    />
  </Avatar.Root>
</template>
