import { useMutation } from "@tanstack/vue-query";
import { authService } from "../service/auth-service";
import { useToast } from "primevue";

export function useRegister() {
    const toast = useToast();
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
    });
    return {register};
}
