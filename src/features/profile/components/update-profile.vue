<script setup lang="ts">
import { Button } from "primevue";
import type { Profile } from "../../../common/interface/profile";
import MyProfile from "./my-profile.vue";
import { ref } from "vue";

defineProps<{
    profile: Profile;
}>();

const previewImage = ref<string | null>(null);
const selectedImage = ref<File | null>(null);

const handleChangeProfile = (e: HTMLInputElement) => {
    const file = e.files?.[0];
    if (file) {
        previewImage.value = URL.createObjectURL(file);
        selectedImage.value = file
    }
};
</script>

<template>
    <div class="px-16 py-10 relative">
        <Button
            class="absolute top-4 right-9 z-20"
            severity="success"
            label="Edit"
            icon="pi pi-pencil"
        />
        <MyProfile :profile="profile" />
    </div>
</template>
