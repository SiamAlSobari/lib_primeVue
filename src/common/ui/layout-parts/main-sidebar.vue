<script setup lang="ts">
import {Menu} from "lucide-vue-next"
</script>

<template>
  <aside class="w-64 bg-[#121212] shadow text-white min-h-screen p-4">
    <div class="flex items-center justify-between">
      <p>Menu</p>
      <Menu />
    </div>
    <nav class="mt-4">
      <ul class="space-y-4">
        <li>
          <a href="#" class="block hover:text-blue-400 transition">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block hover:text-blue-400 transition">Pengguna</a>
        </li>
        <li>
          <a href="#" class="block hover:text-blue-400 transition"
            >Pengaturan</a
          >
        </li>
        <li>
          <a href="#" class="block hover:text-blue-400 transition">Keluar</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>
