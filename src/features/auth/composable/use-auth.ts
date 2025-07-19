import { useMutation } from "@tanstack/vue-query";
import { authService } from "../service/auth-service";
import { useToast } from "primevue";
import { useRouter } from "vue-router";

const register = () => {
    const router = useRouter();
    const toast = useToast();
    const { mutate: register } = useMutation({
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
        },
    });
    return { register };
};

const login = () => {
    const router = useRouter();
    const toast = useToast();
    const { mutate: login } = useMutation({
        mutationFn: authService.login,
        mutationKey: ["login"],
        onSuccess: () => {
            toast.add({
                severity: "success",
                summary: "Success",
                detail: "Login success",
                life: 3000,
            });
            router.push("/");
        },
        onError: () => {
            toast.add({
                severity: "error",
                summary: "Error",
                detail: "Login failed",
                life: 3000,
            });
        },
    });
    return { login };
};

export const useAuth = {
    register,
    login,
};
