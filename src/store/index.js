import Vuex from "vuex";
import Vue from "vue";
import {
    fetchAskItem,
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchUserInfo,
} from "@/api";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {},
    },
    getters: {
        fetchedNews(state){
            return state.news
        },
        fetchedAsk(state){
            return state.ask
        },
        fetchedJobs(state){
            return state.jobs
        },
        fetchedUser(state){
            return state.user
        },
        fetchedAskItem(state){
            return state.item
        },
    },
    mutations: {
        SET_NEWS(state, data){
            state.news = data
        },
        SET_ASK(state, data){
            state.ask = data
        },
        SET_JOBS(state, data){
            state.jobs = data
        },
        SET_USER(state, data){
            state.user = data
        },
        SER_ITEM(state, data){
            state.item = data
        }
    },
    actions: {
        FETCH_NEWS({commit}){
            fetchNewsList()
                .then(({data}) => {
                    commit('SET_NEWS',data)
                })
                .catch((e) => console.log(e))
        },
        FETCH_ASK({commit}){
            fetchAskList()
                .then(({data}) => {
                    commit('SET_ASK',data)
                })
                .catch((e) => console.log(e))
        },
        FETCH_JOBS({commit}){
            fetchJobsList()
                .then(({data}) => {
                    commit('SET_JOBS',data)
                })
                .catch((e) => console.log(e))
        },
        FETCH_USER({commit}, userName){
            fetchUserInfo(userName)
                .then(({data}) => {
                    commit('SET_USER',data)
                })
                .catch((e) => console.log(e))
        },
        FETCH_ITEM({commit}, itemId){
            fetchAskItem(itemId)
                .then(({data}) => {
                    commit('SER_ITEM',data)
                })
                .catch(e=>console.error(e))
        }
    }
})
