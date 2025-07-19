<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { RouterView } from 'vue-router';
import { useThemeStore } from './stores/use-theme';
import { onMounted } from 'vue';


const theme = useThemeStore()
onMounted(() => {
  theme.initTheme()
})
</script>


<template>
  <RouterView />
  <VueQueryDevtools :initial-is-open="false" />
</template>

