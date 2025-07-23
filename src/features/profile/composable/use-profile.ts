import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { profileService } from "../service/profile-service";

const getProfile = () => {
    return useQuery({
        queryKey: ["my-profile"],
        queryFn: () => profileService.getProfile(),
    });
};

const updateProfile = (onSuccess: () => void) => {
    const queryClient = useQueryClient();
    const {
        mutate: updateProfile,
        isError: isUpdateProfileError,
    } = useMutation({
        mutationFn: () => profileService.updateProfile(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["my-profile"] });
            onSuccess();
        },
    });
    return { updateProfile, isUpdateProfileError };
};

export const useProfile = {
    getProfile,
    updateProfile,
};
