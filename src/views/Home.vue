<template>
      <div class="app__body container">
        <!-- <v-row>
            <v-col lg="3" cols="12">
                <app-sidebar></app-sidebar>
            </v-col>
            <v-col lg="6" cols="12">
                <app-feed></app-feed>
            </v-col>
            <v-col lg="3" cols="12">
                <app-chat-sidebar></app-chat-sidebar>
            </v-col>
        </v-row> -->
        <!-- Left -->
        <app-sidebar></app-sidebar>
        <!-- Center -->
        <app-feed></app-feed>
        <!-- Right -->
        <app-chat-sidebar></app-chat-sidebar>
    </div>
</template>

<script>
export default {
    name : "home",
    components: {
        'appSidebar': () => import( /* webpackChunkName: "Sidebar" */ '../components/Sidebar'),
        'appFeed': () => import( /* webpackChunkName: "Feed" */ '../components/Feed'),
        'appChatSidebar': () => import( /* webpackChunkName: "ChatSidebar" */ '../components/ChatSidebar'),
    },
}
</script>

<style lang="scss" scoped>
.app__body {
    display: flex;
}
</style>