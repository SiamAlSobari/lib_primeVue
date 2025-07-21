import type { Profile } from "../../../common/interface/profile";
import { apiClient } from "../../../common/utils/api-client";

class ProfileService {
    public async getProfile() : Promise<{data:Profile}> {
        return apiClient<{data:Profile}>({
            method: "GET",
            url: "/profile",
        });
    }
}

export const profileService = new ProfileService()