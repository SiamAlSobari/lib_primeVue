<script setup lang="ts">
import type { Profile } from "../../../common/interface/profile";
import MyProfile from "./my-profile.vue";

defineProps<{
    profile: Profile;
}>();
</script>

<template>
    <div class="px-16 py-10 relative">
        <Button  class="pi pi-image absolute "/>
        <MyProfile :profile="profile" />
    </div>
</template>
