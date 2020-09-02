<template>
<div class="message-sender-component">
    <div class="message-sender__top">
        <v-avatar>
            <img :src="userProfile.profilePhoto">
        </v-avatar>
        <form @submit.prevent>
            <!-- Message -->
            <input v-model="postData.message" class="message-sender__input message-sender__message" placeholder="What's on your mind?">
            <!-- Image Link -->
            <input v-model="postData.media" class="message-sender__input" placeholder="Image URL(Optional)">
            <!-- Submit button -->
            <button @click="submitPost" class="btn" :disabled="validatePost" type="submit">Hidden Submit</button>
        </form>
    </div>
    <div class="message-sender__bottom">
        <div class="message-sender__option">
            <v-icon style="color : red">mdi-video</v-icon>
            <h3>Live Video</h3>
        </div>
        <div class="message-sender__option">
            <v-icon style="color : green">mdi-video</v-icon>
            <h3>Photo/Video</h3>
        </div>
        <div class="message-sender__option">
            <v-icon style="color : orange">mdi-emoticon</v-icon>
            <h3>Feeling/Activity</h3>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import * as fb from "../../firebase";

export default {
    name: "messageSender",
    data() {
        return {
            // Contains post information
            postData: {
                message: '',
                media: '',
            }
        }
    },
    computed: {
        ...mapState(['userProfile']),
        //Post Validator
        validatePost() {
            if (this.postData.message === '') {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        // Executed when user hits submit on the post form
        async submitPost() {
            //Firebase submit
            try {
                await fb.postsCollection.add({
                    message: this.postData.message,
                    image: this.postData.media,
                    profilePic: this.$store.state.userProfile.profilePhoto,
                    timestamp: new Date(),
                    username: this.$store.state.userProfile.name,
                });
            } catch (error) {
                console.log(error);
            }
            //Clear out post details
            this.postData.message = '';
            this.postData.media = '';
        }
    },
}
</script>

<style lang="scss" scoped>
.message-sender-component {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    margin-top: 30px;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba($color: #000000, $alpha: 0.75);
}

.message-sender__top {
    display: flex;
    border-bottom: 1px solid #eff2f5;
    padding: 15px;

    form {
        display: flex;
        flex: 1;

        >input {
            outline-width: 0;
            border: 0;
            padding: 5px 20px;
            margin: 0 10px;
            border-radius: 999px;
            background-color: #eff2f5;
        }

        >button {
            display: none;
        }

        .message-sender__message {
            flex: 1;
        }
    }
}

.message-sender__bottom {
    display: flex;
    justify-content: space-evenly;

    .message-sender__option {
        padding: 20px;
        display: flex;
        align-items: center;
        color: grey;
        // margin: 5px;

        &:hover {
            background-color: #eff2f5;
            border-radius: 20px;
        }

        >h3 {
            font-size: medium;
            margin-left: 10px;
            cursor: pointer;
        }
    }
}
</style>
