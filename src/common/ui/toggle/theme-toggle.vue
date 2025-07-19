<!-- ThemeToggle.vue -->
<script setup lang="ts">
import Button from 'primevue/button'
import { useThemeStore } from '../../../stores/use-theme';

const theme = useThemeStore()
</script>

<template>
  <Button
    :icon="theme.isDark ? 'pi pi-sun' : 'pi pi-moon'"
    @click="theme.toggleTheme"
    severity="secondary"
  />
</template>
