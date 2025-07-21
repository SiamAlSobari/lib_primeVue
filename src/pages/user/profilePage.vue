<script setup lang="ts">
import ProfileNotFound from "../../common/ui/not-found/profile-not-found.vue";
import MyProfile from "../../features/profile/components/my-profile.vue";
import { useProfile } from "../../features/profile/composable/use-profile";

const { data: profile } = useProfile.getProfile();
</script>

<template>
    <div class="flex p-4 flex-col">
        <div v-if="!profile?.data">
            <ProfileNotFound />
        </div>
        <div class="px-16 py-10" v-else>
            <MyProfile :profile="profile?.data" />
        </div>
    </div>
</template>
