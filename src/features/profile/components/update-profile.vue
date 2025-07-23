<script setup lang="ts">
import { Button, useToast } from "primevue";
import type { Profile } from "../../../common/interface/profile";
import MyProfile from "./my-profile.vue";
import { ref } from "vue";
import { useProfile } from "../composable/use-profile";
import { profileService } from "../service/profile-service";

defineProps<{
    profile: Profile;
}>();

const toast = useToast();

const previewImage = ref<string | null>(null);
const inputFile = ref<HTMLInputElement | null>(null);

const { updateProfile, isUpdateProfileError } = useProfile.updateProfile(() => {
    previewImage.value = null; // Reset preview image after saving
    profileService.profileImage = null; // Clear the profile image in the service
    toast.add({
        severity: "success",
        summary: "Profile Updated",
        detail: "Kamu telah berhasil memperbarui profilmu.",
        life: 3000,
    });
});

const handleChangeProfile = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        previewImage.value = URL.createObjectURL(file);
        profileService.profileImage = file; // Set the selected image to the service
    }
};

const handleClickInput = () => {
    inputFile.value?.click();
};

// Handle error ketika update profile gagal
if (isUpdateProfileError.value) {
    toast.add({
        severity: "error",
        summary: "Update Failed",
        detail: "Gagal memperbarui profil, silakan coba lagi.",
        life: 3000,
    });
}

const handleSaveProfile = async () => {
    updateProfile();
};
</script>

<template>
    <div class="px-16 py-10 relative">
        <input
            ref="inputFile"
            type="file"
            accept="image/*"
            @change="handleChangeProfile"
            class="hidden"
        />
        <Button
            v-if="!previewImage"
            @click="handleClickInput"
            class="absolute  top-4 right-9 z-20"
            severity="success"
            label="Edit"
            icon="pi pi-pencil"
        />
        <Button
            v-else
            @click="handleSaveProfile"
            class="absolute top-4 right-9 z-20"
            severity="success"
            label="Save"
            icon="pi pi-save"
        />
        <MyProfile :imagePreview="previewImage" :profile="profile" />
    </div>
</template>
