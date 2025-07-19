import { useMutation } from "@tanstack/vue-query";
import { authService } from "../service/auth-service";
import { useToast } from "primevue";
import { useRouter } from "vue-router";

export function useRegister() {
    const toast = useToast();
    const router = useRouter();
    const {mutate: register} = useMutation({
        mutationFn: authService.register,
        mutationKey: ["register"],
        onError: () => {
            toast.add({
                severity: "error",
                summary: "Error",
                detail: "Register failed",
                life: 3000,
            });
        },
        onSuccess: () => {
            router.push("/auth/login");
        }
    });
    return {register};
}
