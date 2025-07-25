<script setup lang="ts">
import { Button, Column, ConfirmDialog, DataTable, Image, useConfirm } from "primevue";
import { date } from "../../../common/utils/date";

const confirm = useConfirm();
const dummyData = [
    {
        id: 1,
        title: "Video Pertama",
        description: "Deskripsi video saas asa as asa as  a wq ww qd  wd   pertama",
        thumbnailUrl:
            "https://a-static.besthdwallpaper.com/one-piece-luff-wallpaper-1024x768-19017_18.jpg",
        views: 100,
        likes: 50,
        createdAt: new Date(),
    },
    {
        id: 2,
        title: "Video Kedua",
        description: "Deskripsi video kedua",
        thumbnailUrl:
            "https://static.wikia.nocookie.net/one-piece-pirate-warriors/images/8/8e/StrawHatflagge.jpg/revision/latest?cb=20130113030059",
        views: 100,
        likes: 50,
        createdAt: new Date(),
    },
];

const deleteConfirm = (id: number) => {
    confirm.require({
        message: "Are you sure you want to delete this video?",
        header: "Delete Confirmation",
        icon: "pi pi-exclamation-triangle",
        acceptProps: {
            label: "Delete",
            severity: "danger",
        },
        rejectProps: {
            label: "Cancel",
            severity: "secondary",
            outlined: true,
        },
        accept: () => {
            // Handle the delete action here
            console.log(`Video with id ${id} deleted`);
        },
        reject: () => {
            // Handle the cancel action here
            console.log("Delete action cancelled");
        },
    });
};
</script>

<template>
    <ConfirmDialog></ConfirmDialog>
    <DataTable
        :value="dummyData"
        :paginator="true"
        :rows="10"
        :responsiveLayout="'scroll'"
        class="w-full"
        :rowHover="true"
        :showGridlines="false"
        :scrollable="true"
    >
        <template #header>
            <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-xl font-bold">Video Post</span>
                <Button
                    class="!bg-orange-500 !border-orange-500"
                    icon="pi pi-refresh"
                    rounded
                    raised
                />
            </div>
        </template>
        <Column field="id" :columnKey="'id'">
            <template #header>
                <span class="font-semibold">Title</span>
            </template>
            <template #body="slotProps">
                <span class="text-sm">{{ slotProps.data.title }}</span>
            </template>
        </Column>
        <Column>
            <template #header>
                <span class="font-semibold">Description</span>
            </template>
            <template #body="slotProps">
                <span class="text-sm max-w-60 text-ellipsis line-clamp-1 overflow-hidden">{{
                    slotProps.data.description
                }}</span>
            </template>
        </Column>
        <Column>
            <template #header>
                <span class="font-semibold">Tumbnail</span>
            </template>
            <template #body="slotProps">
                <Image
                    :src="slotProps.data.thumbnailUrl"
                    alt="Thumbnail"
                    class="w-40 h-24 overflow-hidden"
                    preview
                />
            </template>
        </Column>
        <Column>
            <template #header>
                <span class="font-semibold">Views</span>
            </template>
            <template #body="slotProps">
                <span class="text-sm">{{ slotProps.data.views }}</span>
            </template>
        </Column>
        <Column>
            <template #header>
                <span class="font-semibold">Likes</span>
            </template>
            <template #body="slotProps">
                <span class="text-sm">{{ slotProps.data.likes }}</span>
            </template>
        </Column>
        <Column>
            <template #header>
                <span class="font-semibold">Created At</span>
            </template>
            <template #body="slotProps">
                <span class="text-sm">{{ date(slotProps.data.createdAt) }}</span>
            </template>
        </Column>
        <Column>
            <template #body="slotProps">
                <div class="flex items-center gap-2">
                    <Button icon="pi pi-info-circle" raised label="Detail" />
                    <Button
                        icon="pi pi-pencil"
                        class="!bg-orange-500 !border-orange-500"
                        raised
                        label="Edit"
                    />
                    <Button
                        @click="deleteConfirm(slotProps.data.id)"
                        icon="pi pi-trash"
                        class="!bg-red-500 !border-red-500"
                        raised
                        label="Delete"
                    />
                </div>
            </template>
        </Column>
    </DataTable>
</template>

<style scoped>
:deep(.p-image img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    border-radius: 0.375rem; /* tailwind rounded-md */
}
</style>
