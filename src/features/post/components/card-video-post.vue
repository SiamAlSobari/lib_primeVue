<script setup lang="ts">
import { Avatar } from 'primevue';
import { RouterLink } from 'vue-router';

const dummyPost = [
    {
        id: 1,
        title: "Pantai Tropis",
        description:
            "Nikmati matahari sall sa,samk as,ms kask sasha usauahs sashau dan pasir putih yang memukau.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
    {
        id: 2,
        title: "Pegunungan",
        description: "Udara sejuk dan pemandangan alam yang asri.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
    {
        id: 3,
        title: "Kota Modern",
        description: "Keindahan arsitektur dan kehidupan malam.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
    {
        id: 3,
        title: "Kota Modern",
        description: "Keindahan arsitektur dan kehidupan malam.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
    {
        id: 3,
        title: "Kota Modern",
        description: "Keindahan arsitektur dan kehidupan malam.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
    {
        id: 3,
        title: "Kota Modern",
        description: "Keindahan arsitektur dan kehidupan malam.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
    {
        id: 3,
        title: "Kota Modern",
        description: "Keindahan arsitektur dan kehidupan malam.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
    {
        id: 3,
        title: "Kota Modern",
        description: "Keindahan arsitektur dan kehidupan malam.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
    {
        id: 3,
        title: "Kota Modern",
        description: "Keindahan arsitektur dan kehidupan malam.",
        imageUrl:
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    },
];
</script>

<template>
    <div class="grid grid-cols-3 gap-y-3 gap-2">
        <RouterLink v-for="post in dummyPost" to="/post">
            <div class="card flex-col  flex justify-content-center mx-2">
                <img :src="post.imageUrl" :alt="post.title" class="w-full rounded h-44 object-" />
                <div class="p-2">
                    <p class="font-bold text-md lg:text-xl line-clamp-2">
                        {{ post.description }}
                    </p>
                </div>
                <div class="flex gap-2 items-center">
                    <Avatar
                        image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        size="normal"
                        shape="circle"
                    />
                    <p class="text-sm">{{ post.title }}</p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>
