import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router/index.js";
import * as fb from "../../firebase.js";

Vue.use(Vuex)

//Firebase method to fetch all the posts - Realtime with .onSnapshot function
fb.postsCollection.orderBy("timestamp","desc").onSnapshot((snapshot) => {
  //Retrieved psot storage
  let postsArray = [];

  snapshot.forEach((shot) => {
    //Converting it into a javascript object
    let post = shot.data();
    //Adding post id to post array since
    post.id = shot.id;

    //Pushing retrieved post into array
    postsArray.push(post);
  });
  //Once all the posts retrieved - set the posts in store
  store.commit("setPosts",postsArray);
})
const store = new Vuex.Store({
  state: {
    userProfile : {},
    posts : [],
  },
  mutations: {
    setUserProfile(state,data){
      state.userProfile = data;
    },
    setPosts(state,posts){
      state.posts = posts;
    }
  },
  actions: {
    async login({dispatch},form){
      // dispatch the action
      dispatch('fetchUserProfile',form);
    },
    fetchUserProfile({commit},userData){
      const user = {
        id : userData.uid,
        name : userData.displayName,
        profilePhoto : userData.photoURL,
      }
      commit('setUserProfile',user);
      //Redirect user to home screen
      if(router.currentRoute.path === "/login"){
        //User signed in
        router.push("/");
      }
    },
  },
  modules: {
  }
});
export default store;