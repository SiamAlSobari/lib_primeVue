<script setup lang="ts">
import { Avatar } from 'primevue';


</script>

<template>
    <div class="flex items-center  shadow-sm justify-between">
        <div class="flex gap-2 ml-7 items-center">
            <Avatar image="./logo.jpg" size="large"  />
            <h2 class="font-bold text-yellow-500 text-3xl">Tube App</h2>
        </div>
        <div>
            <Avatar image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" size="large" shape="circle" />
        </div>
    </div>
</template>