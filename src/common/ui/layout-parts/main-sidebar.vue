<script setup lang="ts">
import { Home } from "lucide-vue-next";

defineProps<{
    isSidebarOpen: boolean;
}>();

const items = [
    {
        name: "Home",
        icon: Home,
        to: "/",
    },
];
</script>

<template>
    <aside
        class="w-64 shadow min-h-screen p-4 transition-transform duration-300 fixed md:relative top-0 left-0 md:bg-transparent  bg-white/75 z-50 md:translate-x-0"
        :class="isSidebarOpen ? '-translate-x-4' : '-translate-x-full'"
    >
        <nav class="mt-6">
            <ul class="space-y-4">
                <li v-for="item in items" :key="item.name">
                    <RouterLink
                        :to="item.to"
                        class="flex items-center gap-2 p-1.5"
                        :class="$route.path === item.to ? 'bg-yellow-600' : ''"
                    >
                        <component :is="item.icon" />
                        <span>{{ item.name }}</span>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>
