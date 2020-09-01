<template>
<div class="story-components">
    <div class="story" :style="{ backgroundImage : `url(${story.image})`}">
        <v-avatar>
            <img class="story__avatar" :src="story.profileSrc" alt="User">
        </v-avatar>
        <h4 class="title">{{story.title}}</h4>
    </div>
</div>
</template>

<script>
export default {
    name: "story",
    props: ['story'],
}
</script>

<style lang="scss" scoped>
.story {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 120px;
    height: 200px;
    box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    margin-right: 10px;
    transition: all 100ms ease-in;
    cursor: pointer;

    &:hover {
        transform: scale(1.07);
    }

    &__avatar {
        margin: 10px;
        border: 5px solid #2e81f4;
    }

    >.title {
        position: absolute;
        bottom: 20px;
        color: white;
        left: 20px;
    }
}
</style>
