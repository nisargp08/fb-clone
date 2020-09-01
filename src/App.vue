<template>
<div id="app" class="app">
    <app-header></app-header>
    <div class="app__body">
        <app-sidebar></app-sidebar>
        <app-feed></app-feed>
    </div>
</div>
</template>

<script>
export default {
    name: 'App',

    components: {
        'appHeader': () => import( /* webpackChunkName: "SiteNavigation" */ './components/SiteNavigation'),
        'appSidebar': () => import( /* webpackChunkName: "Sidebar" */ './components/Sidebar'),
        'appFeed': () => import( /* webpackChunkName: "Feed" */ './components/Feed'),
    },

    data: () => ({
        //
    }),
};
</script>

<style lang="scss" scoped>
.app{
  background-color: #f1f2f5;
  height: 100vh;
}
.app__body {
    display: flex;
}
</style>
