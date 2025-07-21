import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false
  }),
  actions: {
    initTheme() {
      const theme = localStorage.getItem('theme')
      this.isDark = theme === 'dark'
      document.documentElement.classList.toggle('dark-app', this.isDark)
    },
    toggleTheme() {
      this.isDark = !this.isDark
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark-app', this.isDark)
    }
  }
})
