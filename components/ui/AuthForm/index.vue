<script setup lang="ts">
import { cnBase } from "tailwind-variants";

const router = useRouter();

const isSignupPage = computed(
  () => router.currentRoute.value.fullPath === "/sign-up",
);

const loading = ref(false);

onMounted(() => {
  loading.value = true;

  console.log(router);
});

defineEmits(["submit"]);
</script>
<template>
  <form
    class="grid w-full max-w-xl gap-400 rounded-xl bg-white px-250 py-300 sm:p-400"
    @submit.prevent="(e) => $emit('submit', e)"
  >
    <h1 class="text-preset-1">{{ isSignupPage ? "Sign up" : "Login" }}</h1>
    <div
      :class="
        cnBase(
          'grid gap-4',
          !loading &&
            'shrink-0 animate-pulse rounded bg-grey-500 bg-clip-padding text-[transparent] before:invisible after:invisible [&_*]:invisible',
        )
      "
    >
      <slot name="form-fields" />
    </div>
    <div class="contents">
      <slot name="form-buttons" />
    </div>
  </form>
</template>
