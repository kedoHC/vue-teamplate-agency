


import Vue from 'vue';
import Vuex from 'vuex'

import axios from './axios-auth';


Vue.use( Vuex )

export default new Vuex.Store({
    state: {

        idToken: null,
        userId: null

    },
    mutations: {

        authUser ( state, dataUser ){
            state.idToken = dataUser.token,
            state.userId = dataUser.userId
        }
    },
    actions: {

        login({commit}, authData){

            console.log( authData )

            axios.post("/verifyPassword?key=AIzaSyDGhhCOeSGe9Xxtfu5Xd3bP9MxvWYyjSj8", {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            } )
                .then( res => {
                    // console.log( res )
                    commit("authUser", {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                } )
                .catch( error => {
                    // console.log( error )
                })

        }

    },
    getters: {

    }
})