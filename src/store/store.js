import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },

    getters: {
        mainCounter: state => {
            return state.counter;
        }
    },

    mutations: {
        incrementCounter: (state, payload) => {
            state.counter += payload.step;
        },

        decrementCounter: (state, payload) => {
            state.counter -= payload.step;
        },
        resetCounter: ( state ) => {
            state.counter = 0;
        }
    },

    actions: {
        incrementCounter: ({commit}, payload) => {
            commit('incrementCounter', payload);
        },
        decrementCounter: ({commit}, payload) => {
            commit('decrementCounter', payload);
        },

        asyncIncrementCounter: ({commit}, payload) => {
            setTimeout( () => {
                commit('incrementCounter', payload)
            }, payload.timeOut)
        },

        asyncDecrementCounter: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrementCounter', payload)
            }, payload.timeOut);
        },

        resetCounter: ({commit}) => {
            commit('resetCounter');
        }
    }
})