import Vuex from "vuex";
import Vue from "vue";
import {fetchNewsList} from "@/api";
import {fetchAskList} from "@/api";
import {fetchJobsList} from "@/api";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
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
        }
    }
})
