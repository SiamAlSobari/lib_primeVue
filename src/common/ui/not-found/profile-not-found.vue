<script setup lang="ts">
import { Button } from 'primevue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="flex flex-col items-center justify-center py-10 gap-4 text-center">
    <img
      src="https://www.svgrepo.com/show/24758/user.svg"
      alt="Profile Not Found"
      class="w-32 h-32 opacity-50"
    />
    <h2 class="text-xl font-semibold text-gray-700">Profile Not Found</h2>
    <p class="text-gray-500">Kami tidak menemukan data profil untuk akun ini.</p>
    <Button label="Kembali ke Beranda" icon="pi pi-home" @click="goHome" />
  </div>
</template>

<style scoped>
</style>
