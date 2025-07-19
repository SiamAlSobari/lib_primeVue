import { useMutation } from "@tanstack/vue-query";
import { authService } from "../service/auth-service";

export function useRegister() {
    return useMutation({
        mutationFn: authService.register,
        mutationKey: ["register"],
        onError: () => {
            console.log("error");
        },
    });
}
