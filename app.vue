<script setup lang="ts">
import capitalize from "lodash/capitalize";
const router = useRouter();
const isAuthPage = computed(() =>
  ["/login", "/sign-up"].includes(router.currentRoute.value.fullPath),
);

const defaultLayoutLabel = computed(() => {
  if (isAuthPage.value) return null;

  const currentRoute = router.currentRoute.value.name;

  return currentRoute === "index"
    ? capitalize("overview")
    : capitalize(currentRoute?.toString().replace("-", " "));
});
</script>
<template>
  <NuxtLayout :name="isAuthPage ? 'auth-page' : 'default'" :defaultLayoutLabel>
    <NuxtPage page-key="static" />
  </NuxtLayout>
</template>
