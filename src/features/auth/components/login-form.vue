<script setup lang="ts">
import Password from "primevue/password";
import Card from "primevue/card";
import { IconField, InputIcon, InputText, Message } from "primevue";
import { Button } from "primevue";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { Form } from "@primevue/forms";
import { reactive } from "vue";
import { loginFormSchema } from "../schema/auth-shema";
import { useAuth } from "../composable/use-auth";

const { login } = useAuth.login();
const registerState = reactive({
    email: "",
    password: "",
});
const resolver = zodResolver(loginFormSchema);

function registerUser({ valid }: { valid: boolean }) {
    if (valid) {
        login(registerState);
    }
}
</script>

<template>
    <Card class="lg:w-2/5 w-full md:w-3/5">
        <template #title>
            <p class="text-center">Login</p>
            <hr class="my-3" />
        </template>
        <template #content>
            <div>
                <Form @submit="registerUser" :resolver="resolver" v-slot="$form" class="space-y-4">
                    <div class="w-full">
                        <IconField>
                            <InputText
                                v-model="registerState.email"
                                class="w-full"
                                placeholder="Email"
                                name="email"
                            />
                            <InputIcon slot="icon" class="pi pi-envelope" />
                        </IconField>
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
                            v-model="registerState.password"
                            name="password"
                            :feedback="false"
                        />
                        <Message
                            v-if="$form.password?.invalid"
                            severity="error"
                            size="small"
                            variant="simple"
                            >{{ $form.password.error?.message }}
                        </Message>
                    </div>
                    <Button type="submit" label="Login" class="w-full" />
                </Form>
            </div>
        </template>
    </Card>
</template>
