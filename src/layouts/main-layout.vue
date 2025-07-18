<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNav from "../common/ui/layout-parts/main-nav.vue";
import MainSidebar from "../common/ui/layout-parts/main-sidebar.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <!-- Navbar tetap di atas -->
    <header class="sticky top-0 z-50 bg-[#121212]">
      <MainNav />
    </header>

    <!-- Isi: Sidebar & Konten utama -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar tetap -->
      <aside class="w-64 bg-[] border-r h-full">
        <MainSidebar />
      </aside>

      <!-- Konten utama scroll -->
      <main class="flex-1 overflow-y-auto p-4 ">
        <RouterView />
      </main>
    </div>
  </div>
</template>
