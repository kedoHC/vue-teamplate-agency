import Vue from 'vue'
import "normalize.css"
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import App from './App.vue'
import axios from 'axios'
import store from './store'

import { routes } from './routes'

axios.defaults.baseURL = "/dist/data"

// axios.defaults.headers.common['Authorization'] = "some token"

// #################################
// #################################
// id firebase: vue-template-637ca
// var config = {
//   apiKey: "AIzaSyDGhhCOeSGe9Xxtfu5Xd3bP9MxvWYyjSj8",
//   authDomain: "vue-template-637ca.firebaseapp.com",
//   databaseURL: "https://vue-template-637ca.firebaseio.com",
//   projectId: "vue-template-637ca",
//   storageBucket: "vue-template-637ca.appspot.com",
//   messagingSenderId: "909118546223"
// };
// firebase.initializeApp(config);

// https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
// #################################
// #################################


Vue.use( VueRouter )
Vue.use( Vuelidate )

const router = new VueRouter({
  routes, 
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
