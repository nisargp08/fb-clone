<template>
<div class="feed-component">
    <div class="feed">
        <!-- Story Reel -->
        <app-story-reel></app-story-reel>
        <!-- Message Sender -->
        <app-message-sender></app-message-sender>
        <!-- Post Feed -->
        <transition-group enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut" mode="out-in">
            <app-post v-for="post in posts" :key="post.id" :post="post"></app-post>
        </transition-group>
    </div>
</div>
</template>

<script>
export default {
    name: "feed",
    components: {
        'appStoryReel': () => import( /* webpackChunkName: "StoryReel" */ './StoryReel'),
        'appMessageSender': () => import( /* webpackChunkName: "MessageSender" */ './MessageSender'),
        'appPost': () => import( /* webpackChunkName: "Post" */ './Post'),
    },
    computed: {
        posts() {
            let posts = this.$store.state.posts;
            return posts;
        }
    }
}
</script>

<style scoped>
.feed-component {
    flex-basis: 50%;
}

.feed {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    /* padding: 30px 150px; */
    padding: 30px 50px;
}
</style>
