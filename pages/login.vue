<template>
  <UiAuthForm>
    <template v-slot:form-fields>
      <UiInputField label="Email" />
      <UiInputField label="Password" type="password" />
    </template>
    <template v-slot:form-buttons>
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
  </UiAuthForm>
</template>
