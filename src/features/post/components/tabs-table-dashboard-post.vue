<script setup lang="ts">
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "primevue";
</script>

<template>
    <div>
        <Tabs class="w-full bg-transparent costum-tabs" value="1">
            <TabList>
                <Tab value="1">Video</Tab>
                <Tab value="2">Shorts</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="1">
                    <p>ass</p>
                </TabPanel>
                <TabPanel value="2">
                    <p>asas</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<style scoped>
.costum-tabs {
    --p-tabs-tablist-background: transparent;
    --p-tabs-tabpanel-background: transparent;

    /* Ubah warna teks saat tab aktif */
    --p-tabs-tab-active-color: #f97316; /* oranye Tailwind: orange-500 */

    /* Ubah warna garis bawah/tab indicator aktif */
    --p-tabs-active-bar-background: #f97316;
}
</style>
