<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNav from "../common/ui/layout-parts/main-nav.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="sticky top-0 z-50 ">
      <MainNav />
    </header>
      <main >
        <RouterView />
      </main>
  </div>
</template>
