import { useQuery } from "@tanstack/vue-query"
import { profileService } from "../service/profile-service"

const getProfile = () => {
    return useQuery({
        queryKey: ["my-profile"],
        queryFn: () => profileService.getProfile(),
    })
}

export const useProfile = {
    getProfile
}