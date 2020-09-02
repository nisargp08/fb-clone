<template>
<div id="app" class="app">
    <app-header v-if="ifAuth"></app-header>
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" mode="out-in">
        <router-view></router-view>
    </transition>
    <!-- <div class="app__body container"> -->
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
    <!-- <app-sidebar></app-sidebar> -->
    <!-- Center -->
    <!-- <app-feed></app-feed> -->
    <!-- Right -->
    <!-- <app-chat-sidebar></app-chat-sidebar> -->
    <!-- </div> -->
</div>
</template>

<script>
export default {
    name: 'App',

    components: {
        'appHeader': () => import( /* webpackChunkName: "SiteNavigation" */ './components/SiteNavigation'),
        // 'appSidebar': () => import( /* webpackChunkName: "Sidebar" */ './components/Sidebar'),
        // 'appFeed': () => import( /* webpackChunkName: "Feed" */ './components/Feed'),
        // 'appChatSidebar': () => import( /* webpackChunkName: "ChatSidebar" */ './components/ChatSidebar'),
    },

    data: () => ({
        //
    }),

    computed : {
        ifAuth(){
            //Check if user is authenticated
            return Object.keys(this.$store.state.userProfile).length > 0;
        }
    }
};
</script>

<style lang="scss" scoped>
.app {
    background-color: #f1f2f5;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}
</style>
