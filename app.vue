<script setup lang="ts">
const router = useRouter();
const isAuthPage = computed(() =>
  ["/login", "/sign-up"].includes(router.currentRoute.value.fullPath),
);
</script>
<template>
  <NuxtLayout :name="isAuthPage ? 'auth-page' : 'default'">
    <NuxtPage page-key="static" />
  </NuxtLayout>
</template>
