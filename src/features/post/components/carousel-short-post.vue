<script setup lang="ts">
import Carousel from "primevue/carousel";

const carouselImages = [
    {
        id: 1,
        title: "Pantai Tropis",
        description: "Nikmati matahari dan pasir putih yang memukau.",
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
        :items="3"
        :circular="true"
        :autoplay="true"
        :numVisible="5"
        :numScroll="1"
        :showIndicators="false"
        :responsiveOptions="[
            { breakpoint: '1024px', numVisible: 5, numScroll: 1 },
            { breakpoint: '768px', numVisible: 4, numScroll: 1 },
            { breakpoint: '560px', numVisible: 3, numScroll: 1 },
        ]"
    >
        <template #item="slotProps">
            <div class="card flex justify-content-center mx-2">
                <img
                    :src="slotProps.data.imageUrl"
                    :alt="slotProps.data.title"
                    class="w-48 rounded h-72 object-"
                />
            </div>
        </template>
    </Carousel>
</template>
