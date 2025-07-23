<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/use-theme";
import { KeepAlive, onMounted } from "vue";
import { Toast } from "primevue";

const theme = useThemeStore();
onMounted(() => {
    theme.initTheme();
});
</script>

<template>
    <KeepAlive>
        <RouterView v-slot="{ Component }">
            <component :is="Component" />
        </RouterView>
    </KeepAlive>
    <Toast />
    <VueQueryDevtools :initial-is-open="false" />
</template>
