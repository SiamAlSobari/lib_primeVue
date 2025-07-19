<script setup lang="ts">
import {Menu,Home} from "lucide-vue-next"

const items = [
  {
    name:"Home",
    icon:Home,
    to :"/"
  }
]

</script>

<template>
  <aside class="w-64  shadow min-h-screen p-4">
    <div class="flex items-center justify-between">
      <p>Menu</p>
      <Menu />
    </div>
    <nav class="mt-6">
      <ul class="space-y-4">
        <li v-for="item in items" :key="item.name" >
          <RouterLink :to="item.to" class="flex items-center gap-2 p-1.5"  :class="$route.path === item.to ? 'bg-yellow-600' : '' ">
            <component :is="item.icon" />
            <span>{{ item.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
