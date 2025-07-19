import { useMutation } from "@tanstack/vue-query";
import { useToast } from "primevue";
import { authService } from "../service/auth-service";

export function useLogin() {
    const toast = useToast();
    return useMutation({
        mutationFn: authService.login,
        mutationKey: ["login"],
        onSuccess: () => {
            toast.add({
                severity: "success",
                summary: "Success",
                detail: "Login success",
                life: 3000,
            });
        },
    });
}