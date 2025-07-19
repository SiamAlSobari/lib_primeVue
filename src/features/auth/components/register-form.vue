<script setup lang="ts">
import Password from "primevue/password";
import Card from "primevue/card";
import { ref } from "vue";
import { Button, InputText } from "primevue";

const register = ref({
  password: "",
  email: "",
  name: "",
});
</script>

<template>
  <Card class="w-2/5">
    <template #title>
      <p class="text-center">Register</p>
      <hr class="my-3" />
    </template>
    <template #content>
      <div>
        <form class="space-y-4">
          <div>
            <InputText
              class="w-full"
              placeholder="Name"
              v-model="register.name"
            />
          </div>
          <div class="flex justify-center w-full gap-2">
            <div class="w-full">
              <InputText
                class="w-full"
                placeholder="Email"
                v-model="register.email"
              />
            </div>
            <div class="w-full">
              <Password
                input-class="w-full"
                class="w-full"
                placeholder="Password"
                v-model="register.password"
                toggle-mask
              />
            </div>
          </div>
          <Button label="Register" class="w-full" />
        </form>
      </div>
    </template>
  </Card>
</template>
