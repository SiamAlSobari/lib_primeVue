import { defineStore } from "pinia";
import { authService } from "../features/auth/service/auth-service";

export const useSessionStore = defineStore("session", {
    state: () => ({
        user: null as null | { name: string; email: string; id: string },
        isLogin: false,
    }),

    actions: {
        async getSession() {
            try {
                const session: { name: string; email: string; id: string } | null =
                    await authService.getSession();
                this.user = session;
                this.isLogin = true;
            } catch (error) {
                this.user = null;
            }
        },
    },
});
