import { apiClient } from "../../../common/utils/api-client";

interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

interface LoginForm {
    email: string;
    password: string;
}

class AuthService {
    public async login(data: LoginForm) {
        return apiClient<void>({
            method: "POST",
            url: "/auth/login",
            data,
        });
    }

    public async register(data: RegisterForm) {
        return apiClient<void>({
            method: "POST",
            url: "/auth/register",
            data,
        });
    }

    public async getSession(): Promise<{
        name: string;
        email: string;
        id: string;
        role: string;
    } | null> {
        return apiClient({
            method: "GET",
            url: "/auth/session",
        });
    }
}

export const authService = new AuthService();
