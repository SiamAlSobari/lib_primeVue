<script setup lang="ts">

const dummyShortPost = [
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
    <div class="grid grid-cols-8 gap-2 gap-y-3 ">
        <div v-for="post in dummyShortPost" class="card flex justify-content-center mx-2">
            <img
                :src="post.imageUrl"
                :alt="post.title"
                class="w-36 rounded h-52"
            />
        </div>
    </div>
</template>
