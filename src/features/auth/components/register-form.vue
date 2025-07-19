<script setup lang="ts">
import Password from "primevue/password";
import Card from "primevue/card";
import { Divider, InputText, Message } from "primevue";
import { Button } from "primevue";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import { Form } from "@primevue/forms";

const resolver = zodResolver(
  z.object({
    email: z.email({ error: "Email harus valid" }),
    name: z
      .string({ error: "Name tidak boleh kosong" })
      .min(3, "Name minimal 3 karakter"),
    password: z.string(),
  })
);

function registerUser({ valid }: { valid: boolean }) {
  if (valid) {
    alert("berhasil");
  }
}
</script>

<template>
  <Card class="w-2/5">
    <template #title>
      <p class="text-center">Register</p>
      <hr class="my-3" />
    </template>
    <template #content>
      <div>
        <Form
          @submit="registerUser"
          :resolver="resolver"
          v-slot="$form"
          class="space-y-4"
        >
          <div>
            <InputText class="w-full" placeholder="Name" name="name" />
            <Message
              v-if="$form.name?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.name.error?.message }}</Message
            >
          </div>
          <div class="flex justify-center w-full gap-2">
            <div class="w-full">
              <InputText class="w-full" placeholder="Email" name="email" />
              <Message
                v-if="$form.email?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.email.error?.message }}</Message
              >
            </div>
            <div class="w-full">
              <Password
                input-class="w-full"
                class="w-full"
                placeholder="Password"
                toggle-mask
                name="password"
              >
                <template #footer>
                  <Divider />
                  <ul class="pl-2 my-0 leading-normal text-sm">
                    <li>Minimum 6 characters</li>
                  </ul>
                </template>
              </Password>
            </div>
          </div>
          <Button type="submit" label="Register" class="w-full" />
        </Form>
      </div>
    </template>
  </Card>
</template>
