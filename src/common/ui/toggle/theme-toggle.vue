<!-- ThemeToggle.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'

const isDark = ref(false)

onMounted(() => {
  // Restore dari localStorage
  isDark.value = localStorage.getItem('theme') === 'dark'
  if (isDark.value) document.documentElement.classList.add('dark-app')
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark-app')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <Button
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    @click="toggleDarkMode"
    severity="secondary"
  />
</template>
