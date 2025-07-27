import type { Profile } from "../../../common/interface/profile";
import { apiClient } from "../../../common/utils/api-client";

class ProfileService {
    avatar: File | null = null;

    public async getProfile(): Promise<{ data: Profile }> {
        return apiClient<{ data: Profile }>({
            method: "GET",
            url: "/profile",
        });
    }

    public async updateProfile() {
        const formData = new FormData();
        if (this.avatar) {
            formData.append("avatar", this.avatar);
        }
        return apiClient<void>({
            method: "PATCH",
            url: "/profile",
            data: formData,
        });
    }
}

export const profileService = new ProfileService();
