<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNav from "../common/ui/layout-parts/main-nav.vue";
import MainSidebar from "../common/ui/layout-parts/main-sidebar.vue";
import { ref } from "vue";

const isSidebarOpen = ref(true)
</script>

<template>
    <div class="h-screen flex flex-col">
        <header class="sticky top-0 z-50">
            <MainNav @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
        </header>

        <div class="flex flex-1 z-50 overflow-hidden">
            <aside class="h-full">
                <MainSidebar
                    :isSidebarOpen="isSidebarOpen"
                />
            </aside>

            <main :class="isSidebarOpen ? '': 'px-14'" class="flex-1 overflow-y-auto p-4">
                <RouterView />
            </main>
        </div>
    </div>
</template>
