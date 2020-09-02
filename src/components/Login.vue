<template>
<div class="login-component">
    <div class="login__logo">
        <section>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="">
            <p>Vue.js</p>
        </section>
        <v-icon>mdi-plus</v-icon>
        <section>
            <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/057/landscape/scsslogo.png" alt="">
            <p>Sass/Scss</p>
        </section>
        <v-icon>mdi-equal</v-icon>
        <section>
            <img src="../assets/images/fb-logo.png" alt="">
            <p>Facebook Clone</p>
        </section>
    </div>
    <div class="login__button">
        <button class="dark-btn" type="submit" @click="signIn()">Login in Google</button>
    </div>
</div>
</template>

<script>
// import { auth, provider } from '../../firebase.js';
import { auth,provider } from "../../firebase";
export default {
    name: "login",
    methods : {
        signIn(){
            auth.signInWithPopup(provider)
            .then(result => {
                // console.log(result);
                // Successfull sign in - store in state and redirect to homepage
                this.$store.dispatch('login',result.user);
            }).catch(error => alert(error.message));
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_variable.scss';
.header-component{
    // display: none;
}
.login-component {
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: $dark-primary;
    flex-direction: column;
    height: 100vh;

    .login__logo {
        display: flex;
        justify-content: center;
        align-items: center;

        .v-icon {
            color: white;
        }

        img {
            max-width: 300px;
            height: 100px;
            object-fit: contain;
            margin-left: 10px;
        }

        p {
            color: white;
            text-align: center;
            padding-top: 15px;
            font-size: 20px;
        }

        section {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-self: center;
        }
    }

    .login__button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6em;
    }

    //Login button
    .dark-btn {
        background-color: #ffdd57;
        border-color: transparent;
        color: #000;
        border-width: 1px;
        cursor: pointer;
        justify-content: center;
        padding-bottom: calc(.5em - 1px);
        padding-left: 1em;
        padding-right: 1em;
        padding-top: calc(.5em - 1px);
        text-align: center;
        white-space: nowrap;
        align-items: center;
        border: 1px solid transparent;
        border-radius: 4px;
        box-shadow: none;
        display: inline-flex;
        font-size: 1rem;
        outline-width: 0;
        height: 2.5em;
        transition: all 0.1s ease-in;
        &:hover{
            background-color: darken($color: #ffdd57, $amount: 10%);
        }
    }
}
</style>
