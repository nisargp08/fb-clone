<template>
<div class="header-component">
    <div class="header container">
        <div class="header__left">
            <img src="../assets/images/fb-logo.png" alt="">
            <div class="header__input">
                <v-icon>mdi-magnify</v-icon>
                <input type="text" placeholder="Search Facebook">
            </div>
        </div>
        <div class="header__center">
            <div class="header__option header__option--active">
                <v-icon large>mdi-home</v-icon>
            </div>
            <div class="header__option">
                <v-icon large>mdi-flag</v-icon>
            </div>
            <div class="header__option">
                <v-icon large>mdi-youtube-subscription</v-icon>
            </div>
            <div class="header__option">
                <v-icon large>mdi-storefront-outline</v-icon>
            </div>
            <div class="header__option">
                <v-icon large>mdi-account-supervisor-circle</v-icon>
            </div>
        </div>
        <div class="header__right">
            <div class="header__info">
                <v-avatar>
                    <img :src="userProfile.profilePhoto" alt="John">
                </v-avatar>
                <h4 class="header__username">{{ userProfile.name }}</h4>
            </div>
            <v-icon>mdi-plus</v-icon>
            <v-icon>mdi-forum</v-icon>
            <v-icon>mdi-bell-ring</v-icon>
            <v-icon @click="logout()" title="Logout">mdi-logout</v-icon>
        </div>
    </div>
</div>
</template>

<script>
import { auth } from "../../firebase";
import { mapState } from 'vuex';

export default {
    name: "siteNavigation",
    methods: {
        async logout() {
            //Firebase signotu
            await auth.signOut();

            //Clear userProfile and redirect to /login
            this.$store.dispatch("fetchUserProfile", []);
            this.$router.push("/login");
        }
    },
    computed: {
        ...mapState(['userProfile']),
    }
}
</script>

<style lang="scss" scoped>
.header-component {
    background-color: white;
    box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);

    .header {
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
        position: sticky;
        z-index: 100;

        &__left {
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            >img {
                height: 40px;
            }

            .header__input {
                display: flex;
                align-items: center;
                background-color: #eff2f5;
                padding: 10px;
                margin-left: 10px;
                border-radius: 33px;

                >input {
                    border: none;
                    outline-width: 0;
                    background-color: transparent;
                    font-size: 14px
                }
            }
        }

        &__center {
            display: flex;
            justify-content: center;

            .header__option {
                display: flex;
                align-items: center;
                padding: 0px 30px;
                cursor: pointer;

                &:hover {
                    background-color: #eff2f5;
                    align-items: center;
                    border-radius: 10px;
                    border-bottom: none;

                    >.v-icon {
                        color: #2e81f4;
                    }
                }

                //Active
                &--active {
                    border-bottom: 4px solid #2e81f4;

                    >.v-icon {
                        color: #2e81f4;
                    }
                }
            }
        }

        &__right {
            display: flex;

            .header__info {
                display: flex;
                align-items: center;

                >.header__username {
                    margin-left: 10px;
                }
            }

            .v-icon {
                padding: 0 10px;
                cursor: pointer;
            }
        }
    }
}
</style>
