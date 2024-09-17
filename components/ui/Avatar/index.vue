<script setup lang="ts">
import { Avatar, type AvatarImageProps } from "@ark-ui/vue";
import { tv } from "tailwind-variants";
import { mergeProps } from "vue";

defineOptions({
  inheritAttrs: false,
});

const avatarStyles = tv({
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
});

const { size, ...props } = defineProps<
  AvatarImageProps & { size?: "md" | "sm" }
>();
</script>
<template>
  <Avatar.Root>
    <Avatar.Image
      v-bind="mergeProps(props, $attrs)"
      :class="avatarStyles({ size })"
    />
  </Avatar.Root>
</template>
