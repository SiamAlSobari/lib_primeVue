<script setup lang="ts">
import { Image } from 'primevue';
import type { Profile } from '../../../common/interface/profile';
import { date } from '../../../common/utils/date';

defineProps<{
    profile:Profile
}>()
</script>


<template>
  <div class="flex items-center"> 
    <Image
      :src="profile.avatar_url"
      width="200"
      height="200"
      preview
      class="rounded-full overflow-hidden"
    />
    <div class="ml-4">
      <h1 class="text-2xl font-bold">{{ profile.name }}</h1>
      <p class="text-gray-500">{{ profile.caption || 'No caption' }}</p>
      <p class="text-gray-500">Akun ini dibuat pada {{ date(profile.created_at) }}</p>
    </div>
  </div>
</template>
