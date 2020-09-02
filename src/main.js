import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from '../firebase'
import vuetify from './plugins/vuetify';
import 'animate.css/animate.css'
//Scss
import '@/assets/scss/app.scss';

Vue.config.productionTip = false

let app
//Whenever authenticated state is changed
auth.onAuthStateChanged(user => {
  // If user is not logged in then rerender the app
  if(!app){
    app = new Vue({
      router,
      store,
      vuetify,
      render : h => h(App)
    }).$mount('#app')
  }
  //If logged in then dispatch action which will save the user data to store
  // on refresh
  if(user){
    // console.log(user)
    store.dispatch('fetchUserProfile',user);
  }
})
// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
