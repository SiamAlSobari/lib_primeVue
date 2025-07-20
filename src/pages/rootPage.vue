<script setup lang="ts">
import CarouselShortPost from "../features/post/components/carousel-short-post.vue";
import CarouselVideoPost from "../features/post/components/carousel-video-post.vue";
</script>

<template>
    <div class="flex flex-col gap-2">
        <CarouselVideoPost />
        <div class="flex flex-col gap-2">
            <h1 class="text-2xl font-bold  rounded-lg bg-yellow-600 p-2">Short Post</h1>
            <CarouselShortPost />
        </div>
    </div>
</template>
