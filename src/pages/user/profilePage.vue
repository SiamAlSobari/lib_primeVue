<script setup lang="ts">
import ProfileNotFound from "../../common/ui/not-found/profile-not-found.vue";
import TabsPostProfile from "../../features/profile/components/tabs-post-profile.vue";
import UpdateProfile from "../../features/profile/components/update-profile.vue";
import { useProfile } from "../../features/profile/composable/use-profile";

const { data: profile } = useProfile.getProfile();
</script>

<template>
    <div class="flex p-4 flex-col">
        <div v-if="!profile?.data">
            <ProfileNotFound />
        </div>
        <UpdateProfile v-else :profile="profile?.data" />
        <div>
            <TabsPostProfile />
        </div>
    </div>
</template>
