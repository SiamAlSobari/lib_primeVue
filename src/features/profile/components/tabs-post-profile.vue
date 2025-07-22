<script setup lang="ts">
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "primevue";
import CardVideoPost from "../../post/components/card-video-post.vue";
</script>

<template>
    <div>
        <Tabs class="w-full bg-transparent costum-tabs" value="0">
            <TabList>
                <Tab value="0">Semua</Tab>
                <Tab value="1">Video</Tab>
                <Tab value="2">Shorts</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel value="1">
                    <CardVideoPost />
                </TabPanel>
                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                        fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<style scoped>
.costum-tabs {
    --p-tabs-tablist-background: transparent;
    --p-tabs-tabpanel-background: transparent;
}
</style>
