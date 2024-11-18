<script setup lang="ts">
const form = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = ref({
  email: false,
  password: false,
  confirmPassword: false,
});
</script>
<template>
  <UiAuthForm>
    <template v-slot:form-fields>
      <UiInputField
        type="email"
        label="Email"
        autocomplete="email"
        v-model="form.email"
      />
      <UiInputField
        type="password"
        label="Password"
        autocomplete="new-password"
        v-model="form.password"
      />
      <UiInputField
        type="password"
        label="Confirm Password"
        helper="Passswords must be at least 8 characters"
        autocomplete="new-password"
        v-model="form.confirmPassword"
      />
    </template>
    <template v-slot:form-buttons>
      <UiButton label="Sign Up" />
    </template>
  </UiAuthForm>
</template>
