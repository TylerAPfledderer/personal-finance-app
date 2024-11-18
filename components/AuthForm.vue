<script lang="ts" setup>
import { cnBase } from "tailwind-variants";

const {} = useSupabaseClient<Database>();

const { auth } = useTypedSupabaseClient();

const router = useRouter();

const isSignupPage = computed(
  () => router.currentRoute.value.fullPath === "/sign-up",
);

const loading = ref(false);

onMounted(() => {
  loading.value = true;

  console.log(router);
});
</script>
<template>
  <form
    class="grid w-full max-w-xl gap-400 rounded-xl bg-white px-250 py-300 sm:p-400"
    @submit.prevent="(e) => console.log(e)"
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
      <template v-if="isSignupPage">
        <UiInputField label="Email" autocomplete="email" />
        <UiInputField
          label="Password"
          type="password"
          autocomplete="new-password"
        />
        <UiInputField
          label="Confirm Password"
          type="password"
          helper="Passswords must be at least 8 characters"
          autocomplete="new-password"
        />
      </template>
      <template v-else>
        <UiInputField label="Email" />
        <UiInputField label="Password" type="password" />
      </template>
    </div>
    <template v-if="isSignupPage">
      <UiButton label="Sign Up" />
    </template>
    <template v-else>
      <UiButton label="Login" />
      <div class="flex justify-center gap-2">
        <span>Need to create an account?</span>
        <NuxtLink
          to="/sign-up"
          class="text-preset-4-bold underline underline-offset-4"
        >
          Sign Up
        </NuxtLink>
      </div>
    </template>
  </form>
</template>
