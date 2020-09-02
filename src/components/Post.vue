<template>
<div class="post-component">
    <div class="post">
        <!-- Avatar,Username,Timestamp -->
        <div class="post__top">
            <!-- User Avatar -->
            <v-avatar class="post__avatar">
                <img :src="post.profilePic" :alt="post.username">
            </v-avatar>
            <div class="post__topInfo">
                <h3>{{post.username}}</h3>
                <p>{{ post.timestamp | formatDate }}</p>
            </div>
        </div>
        <!-- Message -->
        <div class="post__bottom">
            <p>{{post.message}}</p>
        </div>
        <!-- Image -->
        <div class="post__image">
            <img :src="post.image" alt="">
        </div>

        <!-- Options -->
        <div class="post__options">
            <div class="post__option">
                <v-icon>mdi-thumb-up-outline</v-icon>
                <p>Like</p>
            </div>
            <div class="post__option">
                <v-icon>mdi-comment-outline</v-icon>
                <p>Comment</p>
            </div>
            <div class="post__option">
                <v-icon>mdi-share-outline</v-icon>
                <p>Share</p>
            </div>
            <div class="post__option">
                <v-icon>mdi-account-circle</v-icon>
                <v-icon>mdi-chevron-down</v-icon>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from "moment";

export default {
    name: "post",
    props: ['post'],
    filters : {
        formatDate(val){
            if(!val) return "-";
            let date = val.toDate();
            return moment(date).fromNow();
        }
    }
}
</script>

<style lang="scss" scoped>
.post-component {
    width : 100%;
    .post {
        width: 100%;
        margin-top: 15px;
        border-radius: 15px;
        background-color: white;
        box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);

        //Top
        &__top {
            display: flex;
            position: relative;
            align-items: center;
            padding: 15px;

            img{
                object-fit: contain;
            }
            .post__topInfo {
                margin-left: 10px;
                //Username
                h3 {
                    font-size: medium;
                }
                //Timestamp
                p{
                    font-size: small;
                    color: grey;
                }
            }
        }
        //Bottom
        &__bottom{
            //Post Message
            p{
                margin: 10px 0px;
                padding: 15px 25px;
            }
        }
        //Image
        &__image {
            img {
                // max-width: 100%;
                width: 100%;
                height: auto;
            }
        }
        //Options
        .post__options{
            display: flex;
            justify-content: space-evenly;
            padding : 10px 15px 15px 15px;
            border-top: 1px solid lightgray;
            font-size: medium;
            color: grey;
            cursor: pointer;

            .post__option{
                display: flex;
                justify-content: center;
                align-items: center;
                padding : 5px;
                flex : 1;
                .v-icon {
                    margin-right: 10px;
                }
                &:hover{
                    background-color: #eff2f5;
                    border-radius: 10px;
                }
            }
        }
    }
}
</style>
