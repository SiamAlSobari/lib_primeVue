<script setup lang="ts">
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "primevue";
import TableVideoDashboardPost from "./table-video-dashboard-post.vue";
import TableShortDashboardPost from "./table-short-dashboard-post.vue";
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
                    <TableVideoDashboardPost />
                </TabPanel>
                <TabPanel value="2">
                    <TableShortDashboardPost />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<style scoped>
.costum-tabs {
    --p-tabs-tablist-background: transparent;
    --p-tabs-tabpanel-background: transparent;

    --p-tabs-tab-active-color: #f97316;

    --p-tabs-active-bar-background: #f97316;
}
</style>
