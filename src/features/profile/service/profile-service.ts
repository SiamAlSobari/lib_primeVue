import type { Profile } from "../../../common/interface/profile";
import { apiClient } from "../../../common/utils/api-client";

class ProfileService {
    profileImage: File | null = null;

    public async getProfile(): Promise<{ data: Profile }> {
        return apiClient<{ data: Profile }>({
            method: "GET",
            url: "/profile",
        });
    }

    public async updateProfile() {
        const formData = new FormData();
        if (this.profileImage) {
            formData.append("image", this.profileImage);
        }
        return apiClient<void>({
            method: "PATCH",
            url: "/profile",
            data: formData,
        });
    }
}

export const profileService = new ProfileService();
