<script setup lang="ts">
import { Avatar } from "primevue";
import Carousel from "primevue/carousel";
import { RouterLink } from "vue-router";

const carouselImages = [
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
    <Carousel
        :value="carouselImages"
        class="w-full"
        :circular="true"
        :numVisible="3"
        :autoplay="true"
        :numScroll="1"
        :responsiveOptions="[
            { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
            { breakpoint: '768px', numVisible: 2, numScroll: 1 },
            { breakpoint: '560px', numVisible: 1, numScroll: 1 },
        ]"
    >
        <template #item="slotProps">
            <RouterLink to="/post">
                <div class="card flex-col flex justify-content-center mx-2">
                    <img
                        :src="slotProps.data.imageUrl"
                        :alt="slotProps.data.title"
                        class="w-full rounded h-52 object-"
                    />
                    <div class="p-2">
                        <p class="font-bold text-xl line-clamp-2">
                            {{ slotProps.data.description }}
                        </p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <Avatar
                            image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                            size="normal"
                            shape="circle"
                        />
                        <p class="text-sm">{{ slotProps.data.title }}</p>
                    </div>
                </div>
            </RouterLink>
        </template>
    </Carousel>
</template>
