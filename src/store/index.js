import Vuex from "vuex";
import Vue from "vue";
import {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItem,
} from "@/api";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {},
        list: []
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
        fetchedItem(state){
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
        SET_ITEM(state, data){
            state.item = data
        },
        SET_LIST(state, data){
            state.list = data
        }
    },
    actions: {
        FETCH_NEWS({commit}){
            fetchNewsList()
                .then((res) => {
                    commit('SET_NEWS',res.data)
                    return res
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
            fetchItem(itemId)
                .then(({data}) => {
                    commit('SET_ITEM',data)
                })
                .catch(e=>console.error(e))
        },
        FETCH_LIST({commit}, pageName){
            fetchList(pageName)
                .then(({data}) => {
                    commit('SET_LIST',data)
                })
                .catch(err => console.log(err))
        }
    }
})
