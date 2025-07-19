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
}

export const authService = new AuthService();
