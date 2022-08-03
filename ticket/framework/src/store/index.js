import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        username: '',
        loginTime: '',
        identity: 0,
        ticket: {},
    },
    mutations: {
        loginSuccess(state, payload) {
            state.username = payload.username
            state.loginTime = payload.loginTime
        },
        loginIdentity(state, payload) {
            state.identity = payload
        },
        Ticket(state, payload) {
            state.ticket = payload
        }

    },
    plugins: [createPersistedState()]

})
export default store