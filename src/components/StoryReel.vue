<template>
<div class="story-reel-component">
    <div class="story-reel">
        <app-stories v-for="story in stories" :key="story.id" :story="story"></app-stories>
    </div>
</div>
</template>

<script>
export default {
    name: 'storyReel',
    data() {
        return {
            stories: [{
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1598929439293-93f9d215b131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
                    profileSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
                    title: 'Leo Gill',
                },
                {
                    id: 2,
                    image: 'https://images.unsplash.com/photo-1598864855213-b9ed5a3137be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
                    profileSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
                    title: 'June Cha',
                },
                {
                    id: 3,
                    image: 'https://images.unsplash.com/photo-1598287635186-52f4c429f600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                    profileSrc: 'https://randomuser.me/api/portraits/men/46.jpg',
                    title: 'Konsta Don',
                },
                {
                    id: 4,
                    image: 'https://images.unsplash.com/photo-1598811907607-25981b310d86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    profileSrc: 'https://randomuser.me/api/portraits/men/97.jpg',
                    title: 'Veeti Seppanen',
                },
                {
                    id: 5,
                    image: 'https://images.unsplash.com/photo-1598771651394-28234afc5f52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    profileSrc: 'https://randomuser.me/api/portraits/women/63.jpg',
                    title: ' Britney Cooper',
                }
            ]
        }
    },
    components: {
        'appStories': () => import( /* webpackChunkName: Story */ './Story'),
    }
}
</script>

<style lang="scss" scoped>
.story-reel {
    display: flex;
}
</style>
