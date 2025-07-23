<script setup lang="ts">
import { Image } from "primevue";
import type { Profile } from "../../../common/interface/profile";
import { date } from "../../../common/utils/date";

defineProps<{
    profile: Profile;
    imagePreview?: string | null;
}>();

</script>

<template>
    <div class="flex sm:flex-row flex-col items-center">
        <Image
            :src="imagePreview || profile.avatar_url"
            preview
            class="rounded-full overflow-hidden !object-cover w-44 h-44"
        />
        <div class="ml-4">
            <h1 class="text-2xl font-bold">{{ profile.name }}</h1>
            <p class="text-gray-500">{{ profile.caption || "No caption" }}</p>
            <p class="text-gray-500">Akun ini dibuat pada {{ date(profile.created_at) }}</p>
        </div>
    </div>
</template>