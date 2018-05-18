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
        incrementCounter: state => {
            state.counter++;
        },

        decrementCounter: state => {
            state.counter--;
        }
    }
})