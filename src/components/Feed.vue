<template>
<div class="feed-component">
    <div class="feed">
        <!-- Story Reel -->
        <app-story-reel></app-story-reel>
        <!-- Message Sender -->
    </div>
</div>
</template>

<script>
export default {
    name: "feed",
    components: {
        'appStoryReel': () => import( /* webpackChunkName: "StoryReel" */ './StoryReel'),
    }
}
</script>

<style scoped>
.feed {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    padding: 30px 150px;
}
</style>
